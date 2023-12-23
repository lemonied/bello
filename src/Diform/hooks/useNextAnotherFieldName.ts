import { useMemo } from 'react';
import { values } from 'lodash';
import { useDiformContext } from './useDiformContext';
import { useAnotherUniqueFields, useCurrentUniqueField } from './useStoreValue';
import { _isEqual } from '../utils';

export const useNextAnotherFieldName = (fieldName: number) => {

  const { uniqueKey, anotherFullNamePath } = useDiformContext();

  const anotherUniqueFields = useAnotherUniqueFields();
  const currentUniqueField = useCurrentUniqueField(fieldName);

  return useMemo(() => {
    if (uniqueKey && anotherUniqueFields && currentUniqueField && anotherFullNamePath) {
      return values(anotherUniqueFields).find(item => _isEqual(item.value, currentUniqueField.value))?.names[anotherFullNamePath.length] as number;
    }
  }, [uniqueKey, anotherUniqueFields, currentUniqueField, anotherFullNamePath]);

};