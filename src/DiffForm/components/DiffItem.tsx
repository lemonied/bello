import React, { isValidElement, cloneElement, useEffect, useRef, useMemo } from 'react';
import type { FC, ReactElement } from 'react';
import { Form, type FormItemProps } from 'antd';
import { useAnotherStoreValue, useDiffFormCombineConfig, useDiffFormConfig, useDiffFormContext, useNames, useNextNames } from '../hooks';
import { DiffFormProvider, DiffFormTypes, StatusCode, _isEmpty } from '../utils';
import type  { DiffFormContextValue, NamePath, NamePaths } from '../utils';
import { DiffFormMark } from './DiffFormMark';
import { isEqual } from 'lodash';

interface DiffItemContextType {
  name: NamePaths;
  fullName: NamePaths;
  value: any;
  anotherValue: any;
}
const DiffItemContext = React.createContext<DiffItemContextType | null>(null);
const useDiffValue = () => React.useContext(DiffItemContext);

interface DiffItemPropsType {
  noStatus?: boolean;
}

interface DiffItemContentProps extends DiffItemPropsType {
  children: ReactElement;
  value?: any;
  name?: NamePath;
  [prop: string]: any;
}
const DiffItemContent: FC<DiffItemContentProps> = (props) => {
  const { children, name, noStatus, ...extra } = props;
  const { type, store, statusInfo, firstStatus } = useDiffFormContext();
  const config = useDiffFormConfig();
  
  const anotherValue = useAnotherStoreValue(name);
  const combineConfig = useDiffFormCombineConfig();

  const namePaths = useNames(name);
  const names = useNextNames(name);

  const storeRef = useRef(store);
  storeRef.current = store;

  const nextStatusInfo = useMemo(() => {
    if (type) {
      const currentVal = extra.value;
      const anotherVal = anotherValue?.value;
      const statusCode = (() => {
        if (_isEmpty(currentVal) && !_isEmpty(anotherVal)) {
          if (type === DiffFormTypes.SOURCE) {
            return StatusCode.EMPTY;
          }
          return StatusCode.REMOVE;
        }
        if (!_isEmpty(currentVal) && _isEmpty(anotherVal)) {
          if (type === DiffFormTypes.SOURCE) {
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

  const nextContext = useMemo<DiffFormContextValue>(() => {
    return {
      statusInfo: nextStatusInfo ?? statusInfo,
      firstStatus: !firstStatus && !statusInfo && !!nextStatusInfo,
    };
  }, [firstStatus, nextStatusInfo, statusInfo]);

  const Wrapper = useMemo(() => {
    return config?.wrapper ?? DiffFormMark;
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
    <DiffFormProvider value={nextContext}>
      <DiffItemContext.Provider
        value={{
          name: namePaths!,
          fullName: names!,
          value: extra.value,
          anotherValue: statusInfo ? undefined : anotherValue?.value,
        }}
      >
        {
          noStatus ?
            cloneElement(children, extra) :
            <Wrapper>{cloneElement(children, extra)}</Wrapper>
        }
      </DiffItemContext.Provider>
    </DiffFormProvider>
  );

};

export type DiffItemProps = FormItemProps & DiffItemPropsType;
export interface DiffItemType {
  (props: DiffItemProps): React.JSX.Element;
  useStatus: typeof Form.Item.useStatus;
  useDiffValue: typeof useDiffValue;
}
const DiffItem: DiffItemType = (props) => {

  const { children, noStatus, ...extra } = props;
  const context = useDiffFormContext();
  const names = useNames(props.name);

  if (typeof context.type !== 'undefined' && names && isValidElement(children)) {
    return (
      <Form.Item {...extra}>
        <DiffItemContent
          name={extra.name}
          noStatus={extra.noStyle || noStatus}
        >{children}</DiffItemContent>
      </Form.Item>
    );
  }

  return (
    <Form.Item {...extra}>{children}</Form.Item>
  );
  
};

DiffItem.useStatus = Form.Item.useStatus;
DiffItem.useDiffValue = useDiffValue;

export { DiffItem };
