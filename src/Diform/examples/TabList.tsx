import React from 'react';
import { Diform, PassProps, StatusInfo } from 'bello';
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
                name: 'iphone 15 pro',
              },
            ],
          },
        }}
        initialValues={{
          products: [
            {
              name: 'iphone 15 pro max',
            },
          ],
        }}
      >
        <Diform.List
          name={['products']}
          uniqueKey={['name']}
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
                          <PassProps>
                            {
                              (itemProps) => {
                                const statusInfo = itemProps.statusInfo as StatusInfo;
                                return (
                                  <Diform.Item
                                    noStatus
                                    noStyle
                                    name={[field.name, 'name']}
                                  >
                                    <PassProps>
                                      {
                                        p => {
                                          return (
                                            <span style={{ color: statusInfo?.color }}>{p.value}</span>
                                          );
                                        }
                                      }
                                    </PassProps>
                                  </Diform.Item>
                                );
                              }
                            }
                          </PassProps>
                        </Diform.ListItem>
                      ),
                      key: `${field.name}`,
                      children: (
                        <Diform.ListItem
                          key={field.key}
                          fieldName={field.name}
                        >
                          <Row gutter={8}>
                            <Col span={8}>
                              <Diform.Item
                                name={[field.name, 'name']}
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
