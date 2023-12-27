import React, { isValidElement, cloneElement, useEffect, useRef, useMemo } from 'react';
import type { FC, ReactElement } from 'react';
import { Form, type FormItemProps } from 'antd';
import { useAnotherStoreValue, useDiformContext, useNames, useNextNames } from '../hooks';
import { DiformProvider, getStatusInfo } from '../utils';
import type  { DiformContextValue, NamePath } from '../utils';
import { DiformMark } from './DiformMark';

interface DifItemContentProps {
  children: ReactElement;
  value?: any;
  name?: NamePath;
  [prop: string]: any;
}
const DifItemContent: FC<DifItemContentProps> = (props) => {
  const { children, name, ...extra } = props;
  const { type, store, statusInfo, firstStatus } = useDiformContext();
  
  const anotherValue = useAnotherStoreValue(name);

  const names = useNextNames(name);

  const storeRef = useRef(store);
  storeRef.current = store;

  const nextStatusInfo = useMemo(() => {
    if (type) {
      const currentVal = extra.value;
      const anotherVal = anotherValue?.value;
      return getStatusInfo(currentVal, anotherVal, type);
    }
  }, [anotherValue?.value, extra.value, type]);

  const nextContext = useMemo<DiformContextValue>(() => {
    return {
      statusInfo: nextStatusInfo ?? statusInfo,
      firstStatus: !firstStatus && !statusInfo && !!nextStatusInfo,
    };
  }, [firstStatus, nextStatusInfo, statusInfo]);

  useEffect(() => {
    if (names && type) {
      const currentVal = extra.value;
      storeRef.current?.emit({ type, names, value: currentVal, statusInfo: nextStatusInfo });
    }
  }, [extra.value, names, nextStatusInfo, type]);

  useEffect(() => {
    if (type && names) {
      return () => storeRef.current?.emit({ type, names, remove: true });
    }
  }, [names, type]);

  return (
    <DiformProvider value={nextContext}>
      <DiformMark>{cloneElement(children, extra)}</DiformMark>
    </DiformProvider>
  );

};

export const DifItem: FC<FormItemProps> = (props) => {

  const { children, ...extra } = props;
  const context = useDiformContext();
  const names = useNames(props.name);

  if (typeof context.type !== 'undefined' && names && isValidElement(children)) {
    return (
      <Form.Item {...extra}>
        <DifItemContent name={extra.name}>{children}</DifItemContent>
      </Form.Item>
    );
  }

  return (
    <Form.Item {...extra}>{children}</Form.Item>
  );
  
};
