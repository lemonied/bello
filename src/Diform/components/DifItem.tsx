import React, { isValidElement, cloneElement, useEffect, useRef, useMemo } from 'react';
import type { FC, ReactElement } from 'react';
import { Form, type FormItemProps } from 'antd';
import { useAnotherStoreValue, useDiformCombineConfig, useDiformConfig, useDiformContext, useNames, useNextNames } from '../hooks';
import { DiformProvider, getStatusInfo } from '../utils';
import type  { DiformContextValue, NamePath } from '../utils';
import { DiformMark } from './DiformMark';

interface DifItemContentProps {
  children: ReactElement;
  value?: any;
  name?: NamePath;
  noStatus?: boolean;
  [prop: string]: any;
}
const DifItemContent: FC<DifItemContentProps> = (props) => {
  const { children, name, noStatus, ...extra } = props;
  const { type, store, statusInfo, firstStatus } = useDiformContext();
  
  const anotherValue = useAnotherStoreValue(name);
  const combineConfig = useDiformCombineConfig();
  const config = useDiformConfig();

  const names = useNextNames(name);

  const storeRef = useRef(store);
  storeRef.current = store;

  const nextStatusInfo = useMemo(() => {
    if (type) {
      const currentVal = extra.value;
      const anotherVal = anotherValue?.value;
      return combineConfig(
        getStatusInfo(currentVal, anotherVal, type),
      );
    }
  }, [anotherValue?.value, extra.value, type, combineConfig]);

  const nextContext = useMemo<DiformContextValue>(() => {
    return {
      statusInfo: nextStatusInfo ?? statusInfo,
      firstStatus: !firstStatus && !statusInfo && !!nextStatusInfo,
    };
  }, [firstStatus, nextStatusInfo, statusInfo]);

  const nextProps = useMemo(() => {
    return {
      ...extra,
      diffstatus: nextContext.firstStatus ? nextContext.statusInfo : undefined,
    };
  }, [extra, nextContext.statusInfo, nextContext.firstStatus]);

  const Wrapper = useMemo(() => {
    return config?.wrapper ?? DiformMark;
  }, [config?.wrapper]);

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
      {
        noStatus ?
          cloneElement(children, nextProps) :
          <Wrapper>{cloneElement(children, nextProps)}</Wrapper>
      }
    </DiformProvider>
  );

};

export interface DifItemProps extends FormItemProps {
  noStatus?: boolean;
}
export interface DifItemType {
  (props: DifItemProps): React.JSX.Element;
  useStatus: typeof Form.Item.useStatus;
}
const DifItem: DifItemType = (props) => {

  const { children, noStatus, ...extra } = props;
  const context = useDiformContext();
  const names = useNames(props.name);

  if (typeof context.type !== 'undefined' && names && isValidElement(children)) {
    return (
      <Form.Item {...extra}>
        <DifItemContent
          name={extra.name}
          noStatus={extra.noStyle || noStatus}
        >{children}</DifItemContent>
      </Form.Item>
    );
  }

  return (
    <Form.Item {...extra}>{children}</Form.Item>
  );
  
};

DifItem.useStatus = Form.Item.useStatus;

export { DifItem };
