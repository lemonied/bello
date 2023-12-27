import { useMemo } from 'react';
import { values } from 'lodash';
import { useDiformContext } from './useDiformContext';
import { useAnotherExistenceValue, useAnotherUniqueFields, useCurrentUniqueField } from './useStoreValue';
import { _isEqual } from '../utils';

export const useNextAnotherFieldName = (fieldName?: number) => {

  const { uniqueKey, anotherFullNamePath } = useDiformContext();

  const anotherUniqueFields = useAnotherUniqueFields();
  const currentUniqueField = useCurrentUniqueField(fieldName);
  const anotherExistenceValue = useAnotherExistenceValue(fieldName);

  return useMemo(() => {
    if (uniqueKey && anotherUniqueFields && currentUniqueField && anotherFullNamePath) {
      return values(anotherUniqueFields).find(item => _isEqual(item.value, currentUniqueField.value))?.names[anotherFullNamePath.length] as number;
    }
    return anotherExistenceValue ? fieldName : undefined;
  }, [uniqueKey, anotherUniqueFields, currentUniqueField, anotherFullNamePath, anotherExistenceValue, fieldName]);

};