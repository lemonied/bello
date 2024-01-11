import { useContext } from 'react';
import { DiffFormInfoContext } from '../utils';

export const useDiffFormInfo = () => {
  return useContext(DiffFormInfoContext);
};
