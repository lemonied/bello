import { concat } from 'lodash';
import { useDeepCompareMemo } from './useDeepCompareMemo';

export const useNonNullConcat = <T extends any[]>(...args: T) => {
  return useDeepCompareMemo(() => {
    if (args.some(v => typeof v === 'undefined')) {
      return undefined;
    }
    const ret = concat(...args) as unknown as Extract<T extends (infer P)[] ? P : T, any[]>;
    return ret.length ? ret : undefined;
  }, [args]);
};
