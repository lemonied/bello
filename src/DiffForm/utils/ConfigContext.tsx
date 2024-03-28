import React, { createContext, useContext, useMemo } from 'react';
import type { ComponentClass, FC, ReactNode } from 'react';

export interface DiffFormComponentProps {
  source?: ReactNode;
  target?: ReactNode;
}
export interface DiffFormConfig {
  locale?: Record<string, string>;
  color?: Record<string, string>;
  /**
   * @description 自定义差异表单布局方式
   */
  component?: FC<DiffFormComponentProps> | ComponentClass<DiffFormComponentProps>;
  /**
   * @description 自定义表单项diff样式
   */
  wrapper?: FC<any> | ComponentClass<any>;
}
export const DiffFormConfigContext = createContext<DiffFormConfig | null>(null);

export const DiffFormConfigProvider: FC<DiffFormConfig & { children?: ReactNode }> = (props) => {

  const { children, ...extra } = props;

  const currentContext = useContext(DiffFormConfigContext);

  const nextContext = useMemo(() => {
    return Object.assign({}, currentContext, extra);
  }, [extra, currentContext]);

  return (
    <DiffFormConfigContext.Provider
      value={nextContext}
    >{children}</DiffFormConfigContext.Provider>
  );
};
