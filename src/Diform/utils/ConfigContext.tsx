import React, { ComponentClass, FC, ReactNode, createContext } from 'react';

export interface DiformComponentProps {
  source?: ReactNode;
  target?: ReactNode;
}
export interface DiformConfig {
  locale?: Record<string, string>;
  color?: Record<string, string>;
  component?: FC<DiformComponentProps> | ComponentClass<DiformComponentProps>;
  wrapper?: FC<any> | ComponentClass<any>;
}
export const DiformConfigContext = createContext<DiformConfig | null>(null);

export const DiformConfigProvider: FC<DiformConfig & { children?: ReactNode }> = (props) => {

  const { children, ...extra } = props;

  return (
    <DiformConfigContext.Provider
      value={extra}
    >{children}</DiformConfigContext.Provider>
  );
};
