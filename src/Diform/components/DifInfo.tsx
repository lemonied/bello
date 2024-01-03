import { ReactNode } from 'react';
import { DiformInfo } from '../utils';
import { useDiformInfo } from '../hooks';

export interface DifInfoProps {
  children: (diformInfo: DiformInfo) => ReactNode;
}
export const DifInfo = (props: DifInfoProps) => {

  const { children } = props;
  const diformInfo = useDiformInfo();

  return children(diformInfo);
};
