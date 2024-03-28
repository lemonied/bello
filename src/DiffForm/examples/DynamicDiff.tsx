import React, { useMemo, useState, useEffect } from 'react';
import { DiffForm, DiffFormTypes } from 'bello';
import type { DiffFormProps } from 'bello';
import { Button, Card, Col, Input, InputNumber, Row, Space, Switch, Typography } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const Parents = () => {

  const { fieldName } = DiffForm.useDiffFormInfo();

  return (
    <Card
      title={'家长'}
      size={'small'}
      bordered={false}
      bodyStyle={{ background: '#f3f3f3' }}
      headStyle={{ background: '#f3f3f3' }}
    >
      <DiffForm.List
        name={[fieldName!, 'parents']}
      >
        {
          (fields, { add, remove }) => {
            return (
              <>
                <Row gutter={[0, 16]}>
                  {
                    fields.map(field => {
                      return (
                        <Col key={field.key} span={24}>
                          <DiffForm.ListItem fieldName={field.name}>
                            <Row gutter={8} align={'middle'}>
                              <Col span={11} xxl={7}>
                                <DiffForm.Item
                                  name={[field.name, 'name']}
                                  label={'姓名'}
                                  rules={[
                                    { required: true, message: '必填项' },
                                  ]}
                                  style={{ marginBottom: 0 }}
                                >
                                  <Input />
                                </DiffForm.Item>
                              </Col>
                              <Col span={11} xxl={7}>
                                <DiffForm.Item
                                  name={[field.name, 'relation']}
                                  label={'关系'}
                                  style={{ marginBottom: 0 }}
                                >
                                  <Input />
                                </DiffForm.Item>
                              </Col>
                              <Col span={20} xxl={7}>
                                <DiffForm.Item
                                  name={[field.name, 'phone']}
                                  label={'手机号'}
                                  style={{ marginBottom: 0 }}
                                >
                                  <Input />
                                </DiffForm.Item>
                              </Col>
                              <Col style={{ paddingTop: 26 }}>
                                <Typography.Link
                                  type={'danger'}
                                  onClick={() => remove(field.name)}
                                >
                                  <DeleteOutlined />
                                </Typography.Link>
                              </Col>
                            </Row>
                          </DiffForm.ListItem>
                        </Col>
                      );
                    })
                  }
                  <Col span={24}>
                    <Button
                      block
                      icon={
                        <PlusOutlined />
                      }
                      onClick={() => add()}
                      size={'small'}
                    >添加家长</Button>
                  </Col>
                </Row>
              </>
            );
          }
        }
      </DiffForm.List>
    </Card>
  );
};

const Students = () => {

  const form = DiffForm.useFormInstance();

  return (
    <Card
      title={'学生名单'}
      size={'small'}
    >
      <DiffForm.List
        name={'students'}
        uniqueKey={'name'}
      >
        {
          (fields, { add, remove }) => {
            return (
              <>
                <Row gutter={[0, 16]}>
                  {
                    fields.map(field => {
                      return (
                        <Col key={field.key} span={24}>
                          <DiffForm.ListItem fieldName={field.name}>
                            <Row gutter={[8, 8]} align={'middle'}>
                              <Col span={11} xxl={7}>
                                <DiffForm.Item
                                  name={[field.name, 'name']}
                                  label={'学生姓名'}
                                  style={{ marginBottom: 0 }}
                                  rules={[
                                    { required: true, message: '必填项' },
                                    {
                                      validator(_, value) {
                                        const list: any[] = form.getFieldValue(['students']) || [];
                                        if (list.some((v, k) => k !== field.name && v?.name === value)) {
                                          return Promise.reject(new Error('姓名重复'));
                                        }
                                        return Promise.resolve();
                                      },
                                    },
                                  ]}
                                >
                                  <Input />
                                </DiffForm.Item>
                              </Col>
                              <Col span={11} xxl={7}>
                                <DiffForm.Item
                                  name={[field.name, 'age']}
                                  label={'年龄'}
                                  style={{ marginBottom: 0 }}
                                >
                                  <InputNumber style={{ width: '100%' }} />
                                </DiffForm.Item>
                              </Col>
                              <Col span={20} xxl={7}>
                                <DiffForm.Item
                                  name={[field.name, 'height']}
                                  label={'身高'}
                                  style={{ marginBottom: 0 }}
                                >
                                  <InputNumber style={{ width: '100%' }} addonAfter='cm' />
                                </DiffForm.Item>
                              </Col>
                              <Col style={{ paddingTop: 26 }}>
                                <Typography.Link
                                  type={'danger'}
                                  onClick={() => remove(field.name)}
                                >
                                  <DeleteOutlined />
                                </Typography.Link>
                              </Col>
                              <Col span={24}>
                                <Parents />
                              </Col>
                            </Row>
                          </DiffForm.ListItem>
                        </Col>
                      );
                    })
                  }
                  <Col span={24}>
                    <Button
                      block
                      icon={
                        <PlusOutlined />
                      }
                      onClick={() => add()}
                    >添加学生</Button>
                  </Col>
                </Row>
              </>
            );
          }
        }
      </DiffForm.List>
    </Card>
  );
};

export default () => {

  const [form] = DiffForm.useForm();
  const [enable, setEnable] = useState(true);
  const diff = useMemo<DiffFormProps['diff']>(() => {
    if (enable) {
      return {
        initialValues: {
          clazz: '三年二班',
          students: [
            {
              name: '江小明',
              age: 13,
              height: 160,
              parents: [
                {
                  name: '江大白',
                  relation: '父亲',
                },
              ],
            },
          ],
        },
      };
    }
  }, [enable]);

  useEffect(() => {
    form.resetFields();
  }, [form]);

  return (
    <Row gutter={[0, 16]}>
      <Space>
        <span>是否开启diff对比功能</span>
        <Switch defaultChecked checkedChildren={'开启'} unCheckedChildren={'关闭'} onChange={e => setEnable(e)} />
      </Space>
      <DiffForm
        diff={diff}
        layout='vertical'
        form={form}
        initialValues={{
          clazz: '三年2班',
          students: [
            {
              name: '江小明',
              age: 12,
              height: 155,
              parents: [
                {
                  name: '江大白',
                  relation: '父子',
                  phone: '13999999999',
                },
                {
                  name: '佟丽娅',
                  relation: '母子',
                  phone: '13888888888',
                },
              ],
            },
          ],
        }}
      >
        <DiffForm.Info>
          {
            (diformInfo) => {
              return (
                <Card
                  title={diformInfo.type === DiffFormTypes.SOURCE ? '变更前' : '变更后'}
                  bodyStyle={{ padding: 8 }}
                >
                  <DiffForm.Item
                    name={'clazz'}
                    label={'班级'}
                    rules={[
                      { required: true },
                    ]}
                  >
                    <Input />
                  </DiffForm.Item>
                  <Students />
                </Card>
              );
            }
          }
        </DiffForm.Info>
      </DiffForm>
    </Row>
  );
};
