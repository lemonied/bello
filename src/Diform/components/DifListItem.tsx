import React, { useMemo } from 'react';
import type { FC, ReactNode } from 'react';
import type { FormListFieldData } from 'antd/es/form/FormList';
import { DIFF_STATUS, DiformProvider, DiformTypes } from '../utils';
import type { DiformContextValue } from '../utils';
import { useDiformContext, useNextAnotherFieldName } from '../hooks';
import { DiformMark } from './DiformMark';

export interface DifListItemProps {
  field: FormListFieldData;
  children?: ReactNode;
}
const DifListItemContent: FC<DifListItemProps> = (props) => {
  const { field, children } = props;
  const nextAnotherFieldName = useNextAnotherFieldName(field.name);
  const { statusInfo, type } = useDiformContext();
  const nextStatusInfo = useMemo(() => {
    if (statusInfo) {
      return statusInfo;
    }
    if (typeof nextAnotherFieldName !== 'number') {
      if (type === DiformTypes.SOURCE) {
        return DIFF_STATUS.REMOVE;
      }
      return DIFF_STATUS.ADD;
    }
  }, [nextAnotherFieldName, statusInfo, type]);

  const nextContext = useMemo<DiformContextValue>(() => {
    return {
      fieldName: field.name,
      anotherFieldName: nextAnotherFieldName,
      statusInfo: nextStatusInfo,
    };
  }, [field.name, nextAnotherFieldName, nextStatusInfo]);

  if (!statusInfo && nextStatusInfo) {
    return (
      <DiformProvider value={nextContext}>
        <DiformMark>{children}</DiformMark>
      </DiformProvider>
    );
  }

  return (
    <DiformProvider value={nextContext}>{children}</DiformProvider>
  );
};
export const DifListItem: FC<DifListItemProps> = (props) => {
  const context = useDiformContext();
  if (typeof context.type !== 'undefined') {
    return (
      <DifListItemContent {...props} />
    );
  }
  return (
    <>{props.children}</>
  );
};
