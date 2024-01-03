import React from 'react';
import { Input } from 'antd';
import { Diform, DiformConfigProvider } from 'bello';

export default () => {

  return (
    <DiformConfigProvider
      color={{
        ADD: 'blue',
        REMOVE: 'black',
        EMPTY: '#ffa940',
        MODIFY: 'rgba(255,255,255,.8)',
      }}
    >
      <Diform
        diff
        initialValues={{
          customColor: '自定义颜色',
        }}
      >
        <Diform.Item
          name={'customColor'}
        >
          <Input />
        </Diform.Item>
      </Diform>
    </DiformConfigProvider>
  );
};
