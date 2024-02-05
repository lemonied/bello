import type { FC, ReactNode } from 'react';
import React, { createContext, useContext, useMemo } from 'react';
import type { NamePaths, DiffFormTypes } from './model';

export interface DiffFormInfo {
  /**
   * @description 当前Form类型（source/target）
   */
  type?: DiffFormTypes;
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
export const DiffFormInfoContext = createContext<DiffFormInfo>({});
export interface DiffFormInfoProviderProps {
  children?: ReactNode;
  value?: DiffFormInfo;
}
export const DiffFormInfoProvider: FC<DiffFormInfoProviderProps> = (props) => {

  const { children, value } = props;

  const currentContext = useContext(DiffFormInfoContext);

  const nextContext = useMemo(() => {
    return Object.assign({}, currentContext, value);
  }, [value, currentContext]);

  return (
    <DiffFormInfoContext.Provider
      value={nextContext}
    >{children}</DiffFormInfoContext.Provider>
  );
};
