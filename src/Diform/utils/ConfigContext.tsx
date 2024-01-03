import React, { FC, ReactNode, createContext } from 'react';

export interface DiformConfig {
  locale?: Record<string, string>;
  color?: Record<string, string>;
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
