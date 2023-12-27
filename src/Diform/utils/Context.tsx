import React, { createContext, useContext, useMemo } from 'react';
import type { FC, ReactNode } from 'react';
import type { NamePaths, StatusInfo } from './model';
import type { DiformTypes } from './constants';
import type { Store } from './store';

export interface DiformContextValue {
  type?: DiformTypes;
  fullNamePath?: NamePaths;
  fieldName?: number;
  anotherFullNamePath?: NamePaths;
  anotherFieldName?: number;
  uniqueKey?: NamePaths;
  store?: Store;
  statusInfo?: StatusInfo;
  firstStatus?: boolean;
}

export const DiformContext = createContext<DiformContextValue>({});

export interface DiformProviderProps {
  children?: ReactNode;
  value?: DiformContextValue;
}
export const DiformProvider: FC<DiformProviderProps> = (props) => {

  const { children, value } = props;

  const currentContext = useContext(DiformContext);

  const nextContext = useMemo(() => {
    return Object.assign({}, currentContext, value);
  }, [value, currentContext]);

  return (
    <DiformContext.Provider
      value={nextContext}
    >{children}</DiformContext.Provider>
  );
};

export interface DiformInfoContextValue {
  /**
   * @description Form的disabled属性
   */
  disabled?: boolean;
  /**
   * @description Form的name属性
   */
  name?: string;
  /**
   * @description 所有父级name的联合
   */
  namePaths?: NamePaths;
  /**
   * @description 当前FormListItem的field.name
   */
  fieldName?: number;
}
export const DiformInfoContext = createContext<DiformInfoContextValue>({});
export interface DiformInfoProviderProps {
  children?: ReactNode;
  value?: DiformInfoContextValue;
}
export const DiformInfoProvider: FC<DiformInfoProviderProps> = (props) => {

  const { children, value } = props;

  const currentContext = useContext(DiformInfoContext);

  const nextContext = useMemo(() => {
    return Object.assign({}, currentContext, value);
  }, [value, currentContext]);

  return (
    <DiformInfoContext.Provider
      value={nextContext}
    >{children}</DiformInfoContext.Provider>
  );
};
