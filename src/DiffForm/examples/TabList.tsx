import React from 'react';
import { DiffForm, PassProps } from 'bello';
import { Col, Input, Row, Tabs } from 'antd';

export default () => {

  const [form] = DiffForm.useForm();

  return (
    <>
      <DiffForm
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
        <DiffForm.List
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
                        <DiffForm.ListItem
                          fieldName={field.name}
                          noStatus
                        >
                          <DiffForm.DiffStatus>
                            {
                              (diffStatus) => {
                                return (
                                  <DiffForm.Item
                                    name={[field.name, 'type']}
                                    noStyle
                                  >
                                    <PassProps>
                                      {
                                        p => {
                                          return (
                                            <span style={{ color: diffStatus?.color }}>{p.value || '未配置'}</span>
                                          );
                                        }
                                      }
                                    </PassProps>
                                  </DiffForm.Item>
                                );
                              }
                            }
                          </DiffForm.DiffStatus>
                        </DiffForm.ListItem>
                      ),
                      key: `${field.name}`,
                      children: (
                        <DiffForm.ListItem
                          key={field.key}
                          fieldName={field.name}
                        >
                          <Row gutter={8}>
                            <Col span={12}>
                              <DiffForm.Item
                                label={'型号'}
                                name={[field.name, 'type']}
                                style={{ marginBottom: 0 }}
                              >
                                <Input />
                              </DiffForm.Item>
                            </Col>
                            <Col span={12}>
                              <DiffForm.Item
                                label={'内存'}
                                name={[field.name, 'ram']}
                                style={{ marginBottom: 0 }}
                              >
                                <Input />
                              </DiffForm.Item>
                            </Col>
                          </Row>
                        </DiffForm.ListItem>
                      ),
                    };
                  })}
                />
              );
            }
          }
        </DiffForm.List>
      </DiffForm>
    </>
  );
};
