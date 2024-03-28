import React from 'react';
import type { ReactNode } from 'react';
import { DiffFormConfigProvider, DiffForm } from 'bello';
import { Input, Select } from 'antd';

const Custom = (props: { children?: ReactNode }) => {

  const { children } = props;
  const status = DiffForm.useDiffFormStatus();

  return (
    <div
      style={{
        border: status ? `3px solid ${status.color}` : undefined,
        borderRadius: 8,
        padding: 8,
      }}
    >
      <span>{status?.text}</span>
      {children}
    </div>
  );
};

export default () => {
  return (
    <DiffFormConfigProvider
      wrapper={Custom}
    >
      <DiffForm
        layout={'vertical'}
        diff={{
          initialValues: {
            name: '张鹏',
            sex: 1,
          },
        }}
        initialValues={{
          name: '张朋',
        }}
      >
        <DiffForm.Item
          label={'姓名'}
          name={'name'}
        >
          <Input />
        </DiffForm.Item>
        <DiffForm.Item
          label={'性别'}
          name={'sex'}
        >
          <Select
            options={[
              {
                label: '女',
                value: 0,
              },
              {
                label: '男',
                value: 1,
              },
            ]}
          />
        </DiffForm.Item>
      </DiffForm>
    </DiffFormConfigProvider>
  );
};
