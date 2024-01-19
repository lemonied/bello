import React from 'react';
import { cleanup, findAllByText, render, getByText, getAllByText } from '@testing-library/react';
import { DiffForm, DiffFormConfigProvider, DiffFormTypes, PassProps, StatusCode } from '../../';
import { Input, Select } from 'antd';
import '@testing-library/jest-dom';
import '../../mocks/matchMedia.mock';

afterEach(cleanup);

describe('DiffForm', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('DiffForm test', async () => {
    const { container } = render(
      <DiffFormConfigProvider
        locale={{
          REMOVE: 'has be removed',
        }}
      >
        <DiffForm
          diff={{
            initialValues: {
              name: '1234',
              list1: [
                {
                  devices: [],
                },
              ],
              list2: [
                {
                  username: '001',
                },
                {
                  username: '002',
                },
              ],
            },
          }}
          initialValues={{
            name: '123',
            list1: [
              {
                devices: ['phone', 'pc'],
              },
            ],
            list2: [
              {
                username: '002',
              },
            ],
          }}
        >
          <DiffForm.Info>
            {
              info => {
                return (
                  <>
                    <span>{info.type === DiffFormTypes.SOURCE ? '变更前' : '变更后'}</span>
                  </>
                );
              }
            }
          </DiffForm.Info>
          <DiffForm.Item
            name={'name'}
            className='item-name'
          >
            <PassProps>
              {
                p => {
                  return (
                    <DiffForm.DiffStatus>
                      {
                        status => {
                          return (
                            <>
                              <span>{`DiffStatus ${status?.code}`}</span>
                              <Input {...p} />
                            </>
                          );
                        }
                      }
                    </DiffForm.DiffStatus>
                  );
                }
              }
            </PassProps>
          </DiffForm.Item>
          <DiffForm.List
            name={'list1'}
          >
            {
              fields => {
                return fields.map(field => {
                  return (
                    <DiffForm.ListItem
                      key={field.key}
                      fieldName={field.name}
                    >
                      <DiffForm.Item
                        name={[field.name, 'devices']}
                        className='item-devices'
                      >
                        <Select mode={'multiple'} />
                      </DiffForm.Item>
                    </DiffForm.ListItem>
                  );
                });
              }
            }
          </DiffForm.List>
          <DiffForm.List
            name={'list2'}
            uniqueKey={'username'}
          >
            {
              fields => {
                return fields.map(field => {
                  return (
                    <div
                      key={field.key}
                      className='item-list2'
                    >
                      <DiffForm.ListItem
                        fieldName={field.name}
                      >
                        <DiffForm.Item
                          name={[field.name, 'username']}
                        >
                          <Input />
                        </DiffForm.Item>
                      </DiffForm.ListItem>
                    </div>
                  );
                });
              }
            }
          </DiffForm.List>
        </DiffForm>
      </DiffFormConfigProvider>,
    );
    await findAllByText(container, /modified/i);

    const nameItems = Array.from(container.querySelectorAll('.item-name')) as HTMLElement[];
    const itemName = nameItems.map(v => getByText(v, /modified/i));
    expect(itemName.length).toBe(2);
    itemName.forEach(v => {
      expect(v).toBeInTheDocument();
    });

    const devicesItems = Array.from(container.querySelectorAll('.item-devices')) as HTMLElement[];
    expect(getByText(devicesItems[0], /empty/i)).toBeInTheDocument();
    expect(getByText(devicesItems[1], /new/i)).toBeInTheDocument();

    const list2Items = Array.from(container.querySelectorAll('.item-list2')) as HTMLElement[];
    expect(getByText(list2Items[0], /has be removed/i)).toBeInTheDocument();

    expect(getByText(container, /变更前/)).toBeInTheDocument();
    expect(getByText(container, /变更后/)).toBeInTheDocument();

    expect(getAllByText(container, new RegExp(`DiffStatus ${StatusCode.MODIFY}`)).length).toBe(2);
    
  });

});
