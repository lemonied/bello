import React, { isValidElement, cloneElement, useEffect, useRef, useMemo } from 'react';
import type { FC, ReactElement } from 'react';
import { Form, type FormItemProps } from 'antd';
import { useAnotherStoreValue, useDiformCombineConfig, useDiformConfig, useDiformContext, useNames, useNextNames } from '../hooks';
import { DiformProvider, DiformTypes, StatusCode, _isEmpty } from '../utils';
import type  { DiformContextValue, NamePath } from '../utils';
import { DiformMark } from './DiformMark';
import { isEqual } from 'lodash';

interface DifItemPropsType {
  noStatus?: boolean;
}

interface DifItemContentProps extends DifItemPropsType {
  children: ReactElement;
  value?: any;
  name?: NamePath;
  [prop: string]: any;
}
const DifItemContent: FC<DifItemContentProps> = (props) => {
  const { children, name, noStatus, ...extra } = props;
  const { type, store, statusInfo, firstStatus } = useDiformContext();
  const config = useDiformConfig();
  
  const anotherValue = useAnotherStoreValue(name);
  const combineConfig = useDiformCombineConfig();

  const names = useNextNames(name);

  const storeRef = useRef(store);
  storeRef.current = store;

  const nextStatusInfo = useMemo(() => {
    if (type) {
      const currentVal = extra.value;
      const anotherVal = anotherValue?.value;
      const statusCode = (() => {
        if (_isEmpty(currentVal) && !_isEmpty(anotherVal)) {
          if (type === DiformTypes.SOURCE) {
            return StatusCode.EMPTY;
          }
          return StatusCode.REMOVE;
        }
        if (!_isEmpty(currentVal) && _isEmpty(anotherVal)) {
          if (type === DiformTypes.SOURCE) {
            return StatusCode.REMOVE;
          }
          return StatusCode.ADD;
        }
        if (!_isEmpty(currentVal) && !_isEmpty(anotherVal) && !isEqual(currentVal, anotherVal)) {
          return StatusCode.MODIFY;
        }
      })();
      return combineConfig(statusCode);
    }
  }, [anotherValue?.value, extra.value, type, combineConfig]);

  const nextContext = useMemo<DiformContextValue>(() => {
    return {
      statusInfo: nextStatusInfo ?? statusInfo,
      firstStatus: !firstStatus && !statusInfo && !!nextStatusInfo,
    };
  }, [firstStatus, nextStatusInfo, statusInfo]);

  const Wrapper = useMemo(() => {
    return config?.wrapper ?? DiformMark;
  }, [config?.wrapper]);

  useEffect(() => {
    if (names && type) {
      const currentVal = extra.value;
      storeRef.current?.emit({ type, names, value: currentVal });
    }
  }, [extra.value, names, type]);

  useEffect(() => {
    if (type && names) {
      return () => storeRef.current?.emit({ type, names, remove: true });
    }
  }, [names, type]);

  return (
    <DiformProvider value={nextContext}>
      {
        noStatus ?
          cloneElement(children, extra) :
          <Wrapper>{cloneElement(children, extra)}</Wrapper>
      }
    </DiformProvider>
  );

};

export type DifItemProps = FormItemProps & DifItemPropsType;
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
