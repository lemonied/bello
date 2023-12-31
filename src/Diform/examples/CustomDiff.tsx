import React, { ReactElement, cloneElement } from 'react';
import { DatePicker, Input } from 'antd';
import { Diform, PassProps } from 'bello';

interface CustomWrapperProps {
  children: ReactElement;
  [prop: string]: any;
}
const CustomWrapper = (props: CustomWrapperProps) => {

  const { children, ...extra } = props;
  const status = Diform.useDiformStatus();

  return (
    <div
      style={{
        padding: 8,
        background: status?.color,
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
      layout='vertical'
    >
      <Diform.Item
        label={'表单项一'}
        name={'customWrapper'}
        noStatus
        extra={'自定义该表单项的diff样式'}
      >
        <CustomWrapper>
          <Input />
        </CustomWrapper>
      </Diform.Item>
      <Diform.Item
        label={'表单项二'}
        name={'date'}
        extra={'DatePicker由于每次选择的日期都是带时分秒的，所以即使左右两边选择同样的日期，变更状态仍然是Modified'}
      >
        <DatePicker
          style={{ width: '100%' }}
        />
      </Diform.Item>
      <Diform.Item
        label={'DatePicker'}
        name={'date2'}
        extra={'解决上边的问题（看源代码）'}
      >
        <PassProps>
          {
            p => {
              return (
                <DatePicker
                  {...p}
                  style={{ width: '100%' }}
                  onChange={(e) => {
                    // 将时分秒毫秒都置为0
                    return p.onChange?.(e ? e.hour(0).minute(0).second(0).millisecond(0) : e);
                  }}
                />
              );
            }
          }
        </PassProps>
      </Diform.Item>
    </Diform>
  );
};
