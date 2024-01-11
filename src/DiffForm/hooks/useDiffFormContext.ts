import { useContext } from 'react';
import { DiffFormContext } from '../utils';

export const useDiffFormContext = () => {
  return useContext(DiffFormContext);
};
