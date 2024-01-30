import { useEffect, useMemo, useRef, useState } from 'react';
import { useDiffFormContext } from './useDiffFormContext';
import { useNextAnotherNames, useNextNames } from './useNextNames';
import { useDebounceFn } from './useDebounceFn';
import { useAnotherType } from './useAnotherType';
import { useNonNullConcat } from './useNonNullConcat';
import { Store } from '../utils';
import type { DiffFormTypes, NamePath, NamePaths } from '../utils';
import { isEmpty } from 'lodash';
import { useMemoizedFn } from './useMemoizedFn';

export const useStoreValue = (type?: DiffFormTypes, names?: NamePaths) => {
  const { store } = useDiffFormContext();
  const [state, setState] = useState(() => store?.getSnapshot({ type, names }));
  const stateRef = useRef(state);

  const assignState = useMemoizedFn(() => {
    setState(stateRef.current);
  });
  const debounced = useDebounceFn(() => {
    assignState();
  }, 300);

  useEffect(() => {
    if (names && type && store) {
      stateRef.current = store.getSnapshot({ type, names });
      assignState();
      const cancel = store.on((storeValue) => {
        const currentState = stateRef.current;
        stateRef.current = storeValue.remove ? undefined : storeValue;
        if (!currentState) {
          assignState();
        } else {
          debounced();
        }
      }, { names, type });
      return () => {
        cancel();
        debounced.cancel();
      };
    }
  }, [type, names, store, debounced, assignState]);

  return state;
};

export const useCurrentStoreValue = (name?: NamePath) => {
  const { type } = useDiffFormContext();
  const fullNames = useNextNames(name);
  return useStoreValue(type, fullNames);
};

export const useAnotherStoreValue = (name?: NamePath) => {
  const { anotherFullNamePath } = useDiffFormContext();
  const type = useAnotherType();
  const nextNames = useNextAnotherNames(name);
  const fullNames = useNonNullConcat(anotherFullNamePath, nextNames);
  return useStoreValue(type, fullNames);
};

export const useCurrentUniqueField = (fieldName?: number) => {
  const { type, fullNamePath, uniqueKey } = useDiffFormContext();
  const names = useNonNullConcat(fullNamePath, fieldName, uniqueKey);
  return useStoreValue(type, names);
};

export const useAnotherUniqueFields = () => {
  const { store, anotherFullNamePath, uniqueKey } = useDiffFormContext();
  const type = useAnotherType();
  const [state, setState] = useState(() => store?.getUniqueFieldsSnapshots({ names: anotherFullNamePath, type, uniqueKey }));
  const stateRef = useRef(state);

  const assignState = useMemoizedFn(() => {
    setState(stateRef.current);
  });
  const debounced = useDebounceFn(() => {
    assignState();
  }, 300);

  useEffect(() => {
    if (anotherFullNamePath && type && store && uniqueKey) {
      stateRef.current = store.getUniqueFieldsSnapshots({ names: anotherFullNamePath, type, uniqueKey });
      assignState();
      const cancel = store.on((storeValue) => {
        const currentState = stateRef.current;
        stateRef.current = currentState ?
          Store.updateState({ ...currentState }, storeValue) :
          store?.getUniqueFieldsSnapshots({ names: anotherFullNamePath, type, uniqueKey });
        if (!currentState) {
          assignState();
        } else {
          debounced();
        }
      }, { names: anotherFullNamePath, type, uniqueKey });
      return () => {
        cancel();
        debounced.cancel();
      };
    }
  }, [anotherFullNamePath, assignState, debounced, store, type, uniqueKey]);

  return state;
};

export const useAnotherExistenceValue = (fieldName?: number) => {
  const { store, anotherFullNamePath } = useDiffFormContext();
  const names = useNonNullConcat(anotherFullNamePath, fieldName);
  const type = useAnotherType();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stateRef = useRef(useMemo(() => store?.getChildSnapshots({ names: names, type }), []));
  const [state, setState] = useState(!isEmpty(stateRef.current));

  const assignState = useMemoizedFn(() => {
    setState(!isEmpty(stateRef.current));
  });
  const debounced = useDebounceFn(() => {
    assignState();
  }, 300);

  useEffect(() => {
    if (names && type && store) {
      stateRef.current = store.getChildSnapshots({ type, names });
      assignState();
      const cancel = store.on((storeValue) => {
        const currentState = stateRef.current;
        stateRef.current = currentState ?
          Store.updateState({ ...currentState }, storeValue) :
          store?.getChildSnapshots({ names, type });
        if (!currentState) {
          assignState();
        } else {
          debounced();
        }
      }, { names, type, fuzzy: true });
      return () => {
        cancel();
        debounced.cancel();
      };
    }
  }, [type, names, store, debounced, assignState]);

  return state;

};
