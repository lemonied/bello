import React from 'react';
import { PassProps } from 'bello';
import { Form, Input } from 'antd';

export default () => {
  return (
    <Form
      initialValues={{
        username: 'username',
      }}
      layout='vertical'
    >
      <Form.Item
        label={'用户名（只读）'}
        name={'username'}
      >
        <PassProps>
          {
            (p) => {
              return (
                <span>{p.value}</span>
              );
            }
          }
        </PassProps>
      </Form.Item>
      <Form.Item
        label={'昵称（禁止输入前后空格）'}
        name={'nickname'}
      >
        <PassProps>
          {
            (p) => {
              return (
                <Input
                  {...p}
                  onChange={e => {
                    p.onChange?.(e.target.value.trim());
                  }}
                />
              );
            }
          }
        </PassProps>
      </Form.Item>
    </Form>
  );
};