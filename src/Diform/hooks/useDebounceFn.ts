import { debounce } from 'lodash';
import { useMemoizedFn } from './useMemoizedFn';
import { useDeepCompareMemo } from './useDeepCompareMemo';

export const useDebounceFn: typeof debounce = (...args) => {
  const [cb, ...extra] = args;

  const fn = useMemoizedFn(cb);

  return useDeepCompareMemo(() => {
    return debounce(fn, ...extra);
  }, [extra]);
};
