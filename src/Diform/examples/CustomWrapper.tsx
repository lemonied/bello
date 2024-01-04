import React, { ReactNode } from 'react';
import { DiformConfigProvider, Diform } from 'bello';
import { Input, Select } from 'antd';

const Custom = (props: { children?: ReactNode }) => {

  const { children } = props;
  const status = Diform.useDiformStatus();

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
    <DiformConfigProvider
      wrapper={Custom}
    >
      <Diform
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
        <Diform.Item
          label={'姓名'}
          name={'name'}
        >
          <Input />
        </Diform.Item>
        <Diform.Item
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
        </Diform.Item>
      </Diform>
    </DiformConfigProvider>
  );
};
