import { useContext } from 'react';
import { DiformInfoContext } from '../utils';

export const useDiformInfo = () => {
  return useContext(DiformInfoContext);
};