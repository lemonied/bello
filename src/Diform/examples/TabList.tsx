import React from 'react';
import { Diform, PassProps } from 'bello';
import { Col, Input, Row, Tabs } from 'antd';

export default () => {

  const [form] = Diform.useForm();

  return (
    <>
      <Diform
        form={form}
        layout={'vertical'}
        diff={{
          initialValues: {
            products: [
              {
                type: 'iphone 15 pro',
                ram: '8gb',
              },
            ],
          },
        }}
        initialValues={{
          products: [
            {
              type: 'iphone 15 pro max',
              ram: '16gb',
            },
          ],
        }}
      >
        <Diform.List
          name={['products']}
          uniqueKey={['type']}
        >
          {
            (fields, { add, remove }) => {
              return (
                <Tabs
                  type='editable-card'
                  onEdit={(e, action) => {
                    if (action === 'add') {
                      add();
                    } else {
                      remove(Number(e));
                    }
                  }}
                  items={fields.map(field => {
                    return {
                      label: (
                        <Diform.ListItem
                          fieldName={field.name}
                          noStatus
                        >
                          <Diform.DifStatus>
                            {
                              (diffstatus) => {
                                return (
                                  <Diform.Item
                                    name={[field.name, 'type']}
                                    noStyle
                                  >
                                    <PassProps>
                                      {
                                        p => {
                                          return (
                                            <span style={{ color: diffstatus?.color }}>{p.value || '未配置'}</span>
                                          );
                                        }
                                      }
                                    </PassProps>
                                  </Diform.Item>
                                );
                              }
                            }
                          </Diform.DifStatus>
                        </Diform.ListItem>
                      ),
                      key: `${field.name}`,
                      children: (
                        <Diform.ListItem
                          key={field.key}
                          fieldName={field.name}
                        >
                          <Row gutter={8}>
                            <Col span={12}>
                              <Diform.Item
                                label={'型号'}
                                name={[field.name, 'type']}
                                style={{ marginBottom: 0 }}
                              >
                                <Input />
                              </Diform.Item>
                            </Col>
                            <Col span={12}>
                              <Diform.Item
                                label={'内存'}
                                name={[field.name, 'ram']}
                                style={{ marginBottom: 0 }}
                              >
                                <Input />
                              </Diform.Item>
                            </Col>
                          </Row>
                        </Diform.ListItem>
                      ),
                    };
                  })}
                />
              );
            }
          }
        </Diform.List>
      </Diform>
    </>
  );
};
