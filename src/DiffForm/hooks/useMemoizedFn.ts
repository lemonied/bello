import { useCallback, useRef } from 'react';

export const useMemoizedFn = <T extends (...args: any[]) => any>(cb: T) => {
  const ref = useRef(cb);
  ref.current = cb;
  return useCallback((...args: Parameters<T>) => {
    return ref.current(...args) as ReturnType<T>;
  }, []);
};
