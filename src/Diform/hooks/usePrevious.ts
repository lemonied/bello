import { useRef } from 'react';

export const usePrevious = <T>(value: T) => {
  const previousRef = useRef<T>();
  const currentRef = useRef(value);
  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }
  return previousRef.current;
};
