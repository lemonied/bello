import React from 'react';
import { Input } from 'antd';
import { DiffForm, DiffFormConfigProvider } from 'bello';

export default () => {

  return (
    <DiffFormConfigProvider
      color={{
        ADD: 'blue',
        REMOVE: 'black',
        EMPTY: '#ffa940',
        MODIFY: 'rgba(255,255,255,.8)',
      }}
    >
      <DiffForm
        diff
        initialValues={{
          customColor: '自定义颜色',
        }}
      >
        <DiffForm.Item
          name={'customColor'}
        >
          <Input />
        </DiffForm.Item>
      </DiffForm>
    </DiffFormConfigProvider>
  );
};
