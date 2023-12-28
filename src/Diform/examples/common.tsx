import React from 'react';
import { Diform } from 'bello';
import { Button, Card, Col, Input, InputNumber, Row, Typography } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const Parents = () => {

  const { fieldName } = Diform.useDiformInfo();

  return (
    <Card
      title={'家长'}
      size={'small'}
    >
      <Diform.List
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
                          <Diform.ListItem fieldName={field.name}>
                            <Row gutter={8} align={'middle'}>
                              <Col span={7}>
                                <Diform.Item
                                  name={[field.name, 'name']}
                                  label={'姓名'}
                                  rules={[
                                    { required: true, message: '必填项' },
                                  ]}
                                >
                                  <Input />
                                </Diform.Item>
                              </Col>
                              <Col span={7}>
                                <Diform.Item
                                  name={[field.name, 'relation']}
                                  label={'关系'}
                                >
                                  <Input />
                                </Diform.Item>
                              </Col>
                              <Col span={7}>
                                <Diform.Item
                                  name={[field.name, 'height']}
                                  label={'手机号'}
                                >
                                  <Input />
                                </Diform.Item>
                              </Col>
                              <Col>
                                <Typography.Link
                                  type={'danger'}
                                  onClick={() => remove(field.name)}
                                >
                                  <DeleteOutlined />
                                </Typography.Link>
                              </Col>
                            </Row>
                          </Diform.ListItem>
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
                    >添加家长</Button>
                  </Col>
                </Row>
              </>
            );
          }
        }
      </Diform.List>
    </Card>
  );
};

const Students = () => {

  const form = Diform.useFormInstance();

  return (
    <Card
      title={'学生名单'}
      size={'small'}
    >
      <Diform.List
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
                          <Diform.ListItem fieldName={field.name}>
                            <Row gutter={8} align={'middle'}>
                              <Col span={7}>
                                <Diform.Item
                                  name={[field.name, 'name']}
                                  label={'姓名'}
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
                                </Diform.Item>
                              </Col>
                              <Col span={7}>
                                <Diform.Item
                                  name={[field.name, 'age']}
                                  label={'年龄'}
                                >
                                  <InputNumber style={{ width: '100%' }} />
                                </Diform.Item>
                              </Col>
                              <Col span={7}>
                                <Diform.Item
                                  name={[field.name, 'height']}
                                  label={'身高'}
                                >
                                  <InputNumber style={{ width: '100%' }} addonAfter='cm' />
                                </Diform.Item>
                              </Col>
                              <Col>
                                <Typography.Link
                                  type={'danger'}
                                  onClick={() => remove(field.name)}
                                >
                                  <DeleteOutlined />
                                </Typography.Link>
                              </Col>
                            </Row>
                            <Parents />
                          </Diform.ListItem>
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
      </Diform.List>
    </Card>
  );
};

export default () => {

  return (
    <Diform
      diff
      layout='vertical'
    >
      <Diform.Item
        name={'clazz'}
        label={'班级'}
        rules={[
          { required: true },
        ]}
      >
        <Input />
      </Diform.Item>
      <Students />
    </Diform>
  );
};