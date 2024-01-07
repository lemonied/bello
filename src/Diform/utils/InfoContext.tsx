import React, { FC, ReactNode, createContext, useContext, useMemo } from 'react';
import { NamePaths, DiformTypes } from './model';

export interface DiformInfo {
  /**
   * @description 当前Form类型（source/target）
   */
  type?: DiformTypes;
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
export const DiformInfoContext = createContext<DiformInfo>({});
export interface DiformInfoProviderProps {
  children?: ReactNode;
  value?: DiformInfo;
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
