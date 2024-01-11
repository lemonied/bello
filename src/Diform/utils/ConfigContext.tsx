import React, { ComponentClass, FC, ReactNode, createContext, useContext, useMemo } from 'react';

export interface DiformComponentProps {
  source?: ReactNode;
  target?: ReactNode;
}
export interface DiformConfig {
  locale?: Record<string, string>;
  color?: Record<string, string>;
  /**
   * @description 自定义差异表单布局方式
   */
  component?: FC<DiformComponentProps> | ComponentClass<DiformComponentProps>;
  /**
   * @description 自定义表单项diff样式
   */
  wrapper?: FC<any> | ComponentClass<any>;
}
export const DiformConfigContext = createContext<DiformConfig | null>(null);

export const DiformConfigProvider: FC<DiformConfig & { children?: ReactNode }> = (props) => {

  const { children, ...extra } = props;

  const currentContext = useContext(DiformConfigContext);

  const nextContext = useMemo(() => {
    return Object.assign({}, currentContext, extra);
  }, [extra, currentContext]);

  return (
    <DiformConfigContext.Provider
      value={nextContext}
    >{children}</DiformConfigContext.Provider>
  );
};
