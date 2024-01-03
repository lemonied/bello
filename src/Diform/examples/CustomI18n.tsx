import React from 'react';
import { Input } from 'antd';
import { Diform, DiformConfigProvider } from 'bello';

export default () => {

  return (
    <DiformConfigProvider
      locale={{
        ADD: '新数据',
        REMOVE: '删除数据',
        EMPTY: '没有数据',
        MODIFY: '修改数据',
      }}
    >
      <Diform
        diff
        initialValues={{
          customName: '自定义文案',
        }}
      >
        <Diform.Item
          name={'customName'}
        >
          <Input />
        </Diform.Item>
      </Diform>
    </DiformConfigProvider>
  );
};
