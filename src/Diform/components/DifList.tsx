import React, { useMemo } from 'react';
import type { FC } from 'react';
import { Form } from 'antd';
import type { FormListProps } from 'antd/es/form/FormList';
import { DiformInfoProvider, DiformProvider, type NamePath } from '../utils';
import type { DiformContextValue, DiformInfoContextValue } from '../utils';
import { useDiformContext, useDiformInfo, useNames, useNextAnotherNames, useNonNullConcat } from '../hooks';

export interface DifListProps extends FormListProps {
  uniqueKey?: NamePath;
}
const DifListContent: FC<DifListProps> = (props) => {
  const { uniqueKey, ...extra } = props;
  const { anotherFullNamePath } = useDiformContext();

  const { namePaths } = useDiformInfo();

  const nextAnotherNames = useNextAnotherNames(extra.name);
  const nextAnotherFullNamePath = useNonNullConcat(anotherFullNamePath, nextAnotherNames);

  const nextUniqueKey = useNames(uniqueKey);

  const nextContext = useMemo<DiformContextValue>(() => {
    return {
      fullNamePath: namePaths,
      anotherFullNamePath: nextAnotherFullNamePath,
      uniqueKey: nextUniqueKey,
    };
  }, [namePaths, nextAnotherFullNamePath, nextUniqueKey]);

  return (
    <DiformProvider value={nextContext}>
      <Form.List {...extra} />
    </DiformProvider>
  );
};
const DifList: FC<DifListProps> = (props) => {
  const { uniqueKey, ...extra } = props;
  const context = useDiformContext();
  const { namePaths } = useDiformInfo();
  const nextNamePaths = useNonNullConcat(namePaths, props.name);
  const nextDiformInfoContext = useMemo<DiformInfoContextValue>(() => {
    return {
      namePaths: nextNamePaths,
    };
  }, [nextNamePaths]);
  if (typeof context.type !== 'undefined') {
    return (
      <DiformInfoProvider value={nextDiformInfoContext}>
        <DifListContent {...extra} uniqueKey={uniqueKey} />
      </DiformInfoProvider>
    );
  }
  return (
    <DiformInfoProvider value={nextDiformInfoContext}>
      <Form.List {...extra} />
    </DiformInfoProvider>
  );
};

export { DifList };
