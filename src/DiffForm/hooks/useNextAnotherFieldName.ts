import { useMemo } from 'react';
import { isEqual, values } from 'lodash';
import { useDiffFormContext } from './useDiffFormContext';
import { useAnotherExistenceValue, useAnotherUniqueFields, useCurrentUniqueField } from './useStoreValue';

export const useNextAnotherFieldName = (fieldName?: number) => {

  const { uniqueKey, anotherFullNamePath } = useDiffFormContext();

  const anotherUniqueFields = useAnotherUniqueFields();
  const currentUniqueField = useCurrentUniqueField(fieldName);
  const anotherExistenceValue = useAnotherExistenceValue(fieldName);

  return useMemo(() => {
    if (uniqueKey && anotherUniqueFields && currentUniqueField && anotherFullNamePath) {
      return values(anotherUniqueFields).find(item => isEqual(item.value, currentUniqueField.value))?.names[anotherFullNamePath.length] as number;
    }
    return anotherExistenceValue ? fieldName : undefined;
  }, [uniqueKey, anotherUniqueFields, currentUniqueField, anotherFullNamePath, anotherExistenceValue, fieldName]);

};
