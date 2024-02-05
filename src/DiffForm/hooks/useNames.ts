import { useDeepCompareMemo } from './useDeepCompareMemo';
import type { NamePath, NamePaths } from '../utils';
import { useContext, useMemo } from 'react';
import { FieldContext } from 'rc-field-form';
import { useDiffFormInfo } from './useDiffFormInfo';
import { useNonNullConcat } from './useNonNullConcat';

export const usePrefixName = () => {
  const { prefixName } = useContext(FieldContext);
  return useMemo<NamePaths>(() => prefixName || [], [prefixName]);
};

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

export const useRelativeNames = (name?: NamePath) => {
  const prefixName = usePrefixName();
  const { namePaths } = useDiffFormInfo();
  const names = useNames(name);

  const relative = useMemo(() => {
    if (namePaths) {
      return prefixName.slice(namePaths.length);
    }
  }, [prefixName, namePaths]);

  return useNonNullConcat(relative, names);;

};
