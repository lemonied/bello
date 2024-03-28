import { ReactNode } from 'react';
import { StatusInfo } from '../utils';
import { useDiffStatus } from '../hooks';

export interface DiffStatusProps {
  children: (diffStatus?: StatusInfo) => ReactNode;
}
export const DiffStatus = (props: DiffStatusProps) => {
  const { children } = props;
  const status = useDiffStatus();
  return children(status);
};
