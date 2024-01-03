import React, { ReactElement, cloneElement } from 'react';
import { Input } from 'antd';
import { Diform, StatusInfo } from 'bello';

interface CustomWrapperProps {
  diffstatus?: StatusInfo;
  children: ReactElement;
  [prop: string]: any;
}
const CustomWrapper = (props: CustomWrapperProps) => {

  const { diffstatus, children, ...extra } = props;

  return (
    <div
      style={{
        padding: 8,
        background: diffstatus?.color,
      }}
    >{cloneElement(children, extra)}</div>
  );
};

export default () => {

  return (
    <Diform
      diff
      initialValues={{
        customWrapper: '自定义diff样式',
      }}
    >
      <Diform.Item
        name={'customWrapper'}
        noStatus
      >
        <CustomWrapper>
          <Input />
        </CustomWrapper>
      </Diform.Item>
    </Diform>
  );
};
