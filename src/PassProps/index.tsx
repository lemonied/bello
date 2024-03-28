import { ReactNode } from 'react';

interface PassPropsProps<P=any> {
  children: (props: P) => ReactNode;
  [props: string]: any;
}
export const PassProps = <P extends object = Record<string, any>>(props: PassPropsProps<P>) => {
  const { children, ...extra } = props;
  return children(extra as P);
};
