import { ReactNode } from 'react';
import { StatusInfo } from '../utils';
import { useDiffStatus } from '../hooks';

export interface DifStatusProps {
  children: (diffStatus?: StatusInfo) => ReactNode;
}
export const DifStatus = (props: DifStatusProps) => {
  const { children } = props;
  const status = useDiffStatus();
  return children(status);
};
