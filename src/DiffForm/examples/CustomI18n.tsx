import React from 'react';
import { Input } from 'antd';
import { DiffForm, DiffFormConfigProvider } from 'bello';

export default () => {

  return (
    <DiffFormConfigProvider
      locale={{
        ADD: '新数据',
        REMOVE: '删除数据',
        EMPTY: '没有数据',
        MODIFY: '修改数据',
      }}
    >
      <DiffForm
        diff
        initialValues={{
          customName: '自定义文案',
        }}
      >
        <DiffForm.Item
          name={'customName'}
        >
          <Input />
        </DiffForm.Item>
      </DiffForm>
    </DiffFormConfigProvider>
  );
};
