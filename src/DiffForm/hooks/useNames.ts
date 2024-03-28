import { useDeepCompareMemo } from './useDeepCompareMemo';
import type { NamePath } from '../utils';

export const useNames = (name?: NamePath) => {
  return useDeepCompareMemo(() => {
    if (typeof name === 'undefined') {
      return undefined;
    }
    if (Array.isArray(name)) {
      return name.length ? name : undefined;
    }
    return [name];
  }, [name]);
};
