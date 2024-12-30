import React from 'react';
import { render, cleanup, findAllByText } from '@testing-library/react';
import { DiffForm, DiffFormTypes } from '../';
import { InputNumber } from 'antd';
import { PassProps } from '../../PassProps';

afterEach(cleanup);

describe('useDiffValue', () => {
  test('useDiffValue', async () => {

    const ItemContent = () => {
      const diffValue = DiffForm.Item.useDiffValue();
      return (
        <span className="diff-value">{JSON.stringify(diffValue)}</span>
      );
    };

    const { container } = render(
      <DiffForm
        diff={{
          initialValues: {
            name: '1234',
            list: [
              {
                username: '001',
                age: 15,
              },
              {
                username: '002',
                age: 18,
              },
            ],
          },
        }}
        initialValues={{
          name: '123',
          list: [
            {
              username: '002',
              age: 17,
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
          <input />
        </DiffForm.Item>
        <DiffForm.List
          name={'list'}
          uniqueKey={'username'}
        >
          {
            fields => {
              return fields.map(field => {
                return (
                  <div
                    key={field.key}
                  >
                    <DiffForm.ListItem
                      fieldName={field.name}
                    >
                      <DiffForm.Item
                        name={[field.name, 'username']}
                      >
                        <input />
                      </DiffForm.Item>
                      <DiffForm.Item
                        name={[field.name, 'age']}
                      >
                        <PassProps>
                          {
                            (p) => {
                              return (
                                <>
                                  <InputNumber {...p} />
                                  <ItemContent />
                                </>
                              );
                            }
                          }
                        </PassProps>
                      </DiffForm.Item>
                    </DiffForm.ListItem>
                  </div>
                );
              });
            }
          }
        </DiffForm.List>
      </DiffForm>,
    );

    await findAllByText(container, /modified/i);

    const diffValues = Array.from(container.querySelectorAll('.diff-value')) as HTMLSpanElement[];

    expect(diffValues[0]?.textContent).toBe(JSON.stringify(
      {
        name: [0, 'age'],
        fullName: ['list', 0, 'age'],
        value: 15,
        anotherValue: undefined,
      },
    ));

    expect(diffValues[1]?.textContent).toBe(JSON.stringify(
      {
        name: [1, 'age'],
        fullName: ['list', 1, 'age'],
        value: 18,
        anotherValue: 17,
      },
    ));

    expect(diffValues[2]?.textContent).toBe(JSON.stringify(
      {
        name: [0, 'age'],
        fullName: ['list', 0, 'age'],
        value: 17,
        anotherValue: 18,
      },
    ));

  });
});
