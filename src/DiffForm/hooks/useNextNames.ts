import { useMemo } from 'react';
import { useDiffFormContext } from './useDiffFormContext';
import type { NamePaths, NamePath } from '../utils';
import { useNames } from './useNames';
import { useNonNullConcat } from './useNonNullConcat';

export const useNextNames = (name?: NamePath) => {
  const names = useNames(name);
  const { fullNamePath } = useDiffFormContext();
  return useNonNullConcat(fullNamePath, names);
};

export const useNextAnotherNames = (name?: NamePath) => {
  const names = useNames(name);
  const { anotherFieldName, uniqueKey } = useDiffFormContext();
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
