import { useMemo } from 'react';
import { useDiformContext } from './useDiformContext';
import type { NamePaths, NamePath } from '../utils';
import { useNames } from './useNames';
import { useNonNullConcat } from './useNonNullConcat';

export const useNextNames = (name?: NamePath) => {
  const names = useNames(name);
  const { fullNamePath } = useDiformContext();
  return useNonNullConcat(fullNamePath, names);
};

export const useNextAnotherNames = (name?: NamePath) => {
  const names = useNames(name);
  const { anotherFieldName, uniqueKey } = useDiformContext();
  return useMemo(() => {
    if (uniqueKey && typeof anotherFieldName === 'number' && typeof names?.[0] === 'number') {
      return [
        anotherFieldName,
        ...names.slice(1),
      ] as NamePaths;
    }
    return names;
  }, [anotherFieldName, names, uniqueKey]);
};
