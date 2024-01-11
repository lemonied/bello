import { DiffFormTypes } from '../utils';
import { useDiffFormContext } from './useDiffFormContext';

export const useAnotherType = () => {
  const { type } = useDiffFormContext();

  return type === DiffFormTypes.SOURCE ? DiffFormTypes.TARGET : DiffFormTypes.SOURCE;
};
