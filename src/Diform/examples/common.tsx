import React from 'react';
import { Diform } from 'bello';
import { Button, Card, Col, Input, InputNumber, Row, Typography } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

export default () => {
  return (
    <Diform
      diff
      layout='vertical'
    >
      <Diform.Item
        name={'slogan'}
        label={'口号'}
      >
        <Input />
      </Diform.Item>
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
                            <Diform.ListItem field={field}>
                              <Row gutter={8} align={'middle'}>
                                <Col span={7}>
                                  <Diform.Item
                                    name={[field.name, 'name']}
                                    label={'姓名'}
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
                      >添加学生</Button>
                    </Col>
                  </Row>
                </>
              );
            }
          }
        </Diform.List>
      </Card>
    </Diform>
  );
};
