import React, { useMemo } from 'react';
import type { FC } from 'react';
import { Form } from 'antd';
import type { FormListProps } from 'antd/es/form/FormList';
import { DiffFormInfoProvider, DiffFormProvider, type NamePath } from '../utils';
import type { DiffFormContextValue, DiffFormInfo } from '../utils';
import { useDiffFormContext, useDiffFormInfo, useNames, useNextAnotherNames, useNextNames, useNonNullConcat } from '../hooks';

export interface DiffListProps extends FormListProps {
  uniqueKey?: NamePath;
}
const DiffListContent: FC<DiffListProps> = (props) => {
  const { uniqueKey, ...extra } = props;
  const { anotherFullNamePath } = useDiffFormContext();

  const { namePaths } = useDiffFormInfo();

  const nextAnotherNames = useNextAnotherNames(extra.name);
  const nextAnotherFullNamePath = useNonNullConcat(anotherFullNamePath, nextAnotherNames);

  const nextUniqueKey = useNames(uniqueKey);

  const nextContext = useMemo<DiffFormContextValue>(() => {
    return {
      fullNamePath: namePaths,
      anotherFullNamePath: nextAnotherFullNamePath,
      uniqueKey: nextUniqueKey,
    };
  }, [namePaths, nextAnotherFullNamePath, nextUniqueKey]);

  return (
    <DiffFormProvider value={nextContext}>
      <Form.List {...extra} />
    </DiffFormProvider>
  );
};

const DiffList: FC<DiffListProps> = (props) => {
  const { uniqueKey, ...extra } = props;
  const context = useDiffFormContext();
  const namePaths = useNextNames(extra.name);
  const nextDiffFormInfoContext = useMemo<DiffFormInfo>(() => {
    return {
      namePaths,
      fieldName: undefined, // 重置fieldName
    };
  }, [namePaths]);
  if (typeof context.type !== 'undefined') {
    return (
      <DiffFormInfoProvider value={nextDiffFormInfoContext}>
        <DiffListContent {...extra} uniqueKey={uniqueKey} />
      </DiffFormInfoProvider>
    );
  }
  return (
    <DiffFormInfoProvider value={nextDiffFormInfoContext}>
      <Form.List {...extra} />
    </DiffFormInfoProvider>
  );
};

export { DiffList };
