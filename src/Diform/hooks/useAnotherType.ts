import { DiformTypes } from '../utils';
import { useDiformContext } from './useDiformContext';

export const useAnotherType = () => {
  const { type } = useDiformContext();

  return type === DiformTypes.SOURCE ? DiformTypes.TARGET : DiformTypes.SOURCE;
};
