import React, { createContext, useContext, useMemo } from 'react';
import type { FC, ReactNode } from 'react';
import type { NamePaths, StatusInfo, DiffFormTypes } from './model';
import type { Store } from './store';

export interface DiffFormContextValue {
  type?: DiffFormTypes;
  fullNamePath?: NamePaths;
  fieldName?: number;
  anotherFullNamePath?: NamePaths;
  anotherFieldName?: number;
  uniqueKey?: NamePaths;
  store?: Store;
  statusInfo?: StatusInfo;
  firstStatus?: boolean;
}

export const DiffFormContext = createContext<DiffFormContextValue>({});

export interface DiffFormProviderProps {
  children?: ReactNode;
  value?: DiffFormContextValue;
}
export const DiffFormProvider: FC<DiffFormProviderProps> = (props) => {

  const { children, value } = props;

  const currentContext = useContext(DiffFormContext);

  const nextContext = useMemo(() => {
    return Object.assign({}, currentContext, value);
  }, [value, currentContext]);

  return (
    <DiffFormContext.Provider
      value={nextContext}
    >{children}</DiffFormContext.Provider>
  );
};
