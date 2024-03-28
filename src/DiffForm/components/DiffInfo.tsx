import type { ReactNode } from 'react';
import type { DiffFormInfo } from '../utils';
import { useDiffFormInfo } from '../hooks';

export interface DiffInfoProps {
  children: (diffFormInfo: DiffFormInfo) => ReactNode;
}
export const DiffInfo = (props: DiffInfoProps) => {

  const { children } = props;
  const diffFormInfo = useDiffFormInfo();

  return children(diffFormInfo);
};
