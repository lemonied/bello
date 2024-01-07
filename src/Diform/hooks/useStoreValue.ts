import { useEffect, useMemo, useRef, useState } from 'react';
import { useDiformContext } from './useDiformContext';
import { useNextAnotherNames, useNextNames } from './useNextNames';
import { useDebounceFn } from './useDebounceFn';
import { useAnotherType } from './useAnotherType';
import { useNonNullConcat } from './useNonNullConcat';
import { Store } from '../utils';
import type { DiformTypes, NamePath, NamePaths, StoreValue } from '../utils';
import { isEmpty } from 'lodash';

export const useStoreValue = (type?: DiformTypes, names?: NamePaths) => {
  const { store } = useDiformContext();
  const [state, setState] = useState(() => store?.getSnapshot({ type, names }));

  const debounced = useDebounceFn((storeValue?: StoreValue) => {
    setState(storeValue);
  }, 300);

  useEffect(() => {
    if (names && type && store) {
      debounced(store.getSnapshot({ type, names }));
      const cancel = store.on((storeValue) => {
        debounced(storeValue.remove ? undefined : storeValue);
      }, { names, type });
      return () => {
        cancel();
        debounced.cancel();
      };
    }
  }, [type, names, store, debounced]);

  return state;
};

export const useCurrentStoreValue = (name?: NamePath) => {
  const { type } = useDiformContext();
  const fullNames = useNextNames(name);
  return useStoreValue(type, fullNames);
};

export const useAnotherStoreValue = (name?: NamePath) => {
  const { anotherFullNamePath } = useDiformContext();
  const type = useAnotherType();
  const nextNames = useNextAnotherNames(name);
  const fullNames = useNonNullConcat(anotherFullNamePath, nextNames);
  return useStoreValue(type, fullNames);
};

export const useCurrentUniqueField = (fieldName?: number) => {
  const { type, fullNamePath, uniqueKey } = useDiformContext();
  const names = useNonNullConcat(fullNamePath, fieldName, uniqueKey);
  return useStoreValue(type, names);
};

export const useAnotherUniqueFields = () => {
  const { store, anotherFullNamePath, uniqueKey } = useDiformContext();
  const type = useAnotherType();
  const [state, setState] = useState(() => store?.getUniqueFieldsSnapshots({ names: anotherFullNamePath, type, uniqueKey }));
  const stateRef = useRef(state);

  const debounced = useDebounceFn(() => {
    setState(stateRef.current);
  }, 300);

  useEffect(() => {
    if (anotherFullNamePath && type && store && uniqueKey) {
      stateRef.current = store.getUniqueFieldsSnapshots({ names: anotherFullNamePath, type, uniqueKey });
      debounced();
      const cancel = store.on((storeValue) => {
        stateRef.current = stateRef.current ?
          Store.updateState({ ...stateRef.current }, storeValue) :
          store?.getUniqueFieldsSnapshots({ names: anotherFullNamePath, type, uniqueKey });
        debounced();
      }, { names: anotherFullNamePath, type, uniqueKey });
      return () => {
        cancel();
        debounced.cancel();
      };
    }
  }, [anotherFullNamePath, debounced, store, type, uniqueKey]);

  return state;
};

export const useAnotherExistenceValue = (fieldName?: number) => {
  const { store, anotherFullNamePath } = useDiformContext();
  const names = useNonNullConcat(anotherFullNamePath, fieldName);
  const type = useAnotherType();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stateRef = useRef(useMemo(() => store?.getChildSnapshots({ names: names, type }), []));
  const [state, setState] = useState(!isEmpty(stateRef.current));

  const debounced = useDebounceFn(() => {
    setState(!isEmpty(stateRef.current));
  }, 300);

  useEffect(() => {
    if (names && type && store) {
      stateRef.current = store.getChildSnapshots({ type, names });
      debounced();
      const cancel = store.on((storeValue) => {
        stateRef.current = stateRef.current ?
          Store.updateState({ ...stateRef.current }, storeValue) :
          store?.getChildSnapshots({ names, type });
        debounced();
      }, { names, type, fuzzy: true });
      return () => {
        cancel();
        debounced.cancel();
      };
    }
  }, [type, names, store, debounced]);

  return state;

};
