import { useContext } from 'react';
import { DiformContext } from '../utils';

export const useDiformContext = () => {
  return useContext(DiformContext);
};
