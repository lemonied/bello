import { useMemo } from 'react';
import { useDiformContext } from './useDiformContext';

export const useDiffStatus = () => {
  const { statusInfo, firstStatus } = useDiformContext();
  return useMemo(() => {
    return firstStatus ? statusInfo : null;
  }, [firstStatus, statusInfo]);
};
