import React, { useMemo } from 'react';
import type { FC, ReactNode } from 'react';
import { DIFF_STATUS, DiformInfoProvider, DiformProvider, DiformTypes } from '../utils';
import type { DiformContextValue, DiformInfoContextValue } from '../utils';
import { useDiformContext, useDiformInfo, useNextAnotherFieldName } from '../hooks';
import { DiformMark } from './DiformMark';

export interface DifListItemProps {
  fieldName: number;
  children?: ReactNode;
}
const DifListItemContent: FC<Omit<DifListItemProps, 'fieldName'>> = (props) => {
  const { children } = props;
  const { fieldName } = useDiformInfo();
  const nextAnotherFieldName = useNextAnotherFieldName(fieldName);
  const { statusInfo, type, firstStatus } = useDiformContext();
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
      fieldName,
      anotherFieldName: nextAnotherFieldName,
      statusInfo: nextStatusInfo,
      firstStatus: !firstStatus && !statusInfo && !!nextStatusInfo,
    };
  }, [fieldName, firstStatus, nextAnotherFieldName, nextStatusInfo, statusInfo]);

  return (
    <DiformProvider value={nextContext}>
      <DiformMark>{children}</DiformMark>
    </DiformProvider>
  );
};
export const DifListItem: FC<DifListItemProps> = (props) => {
  const context = useDiformContext();

  const nextDiformInfoContext = useMemo<DiformInfoContextValue>(() => {
    return {
      fieldName: props.fieldName,
    };
  }, [props.fieldName]);

  if (typeof context.type !== 'undefined') {
    return (
      <DiformInfoProvider value={nextDiformInfoContext}>
        <DifListItemContent {...props} />
      </DiformInfoProvider>
    );
  }
  return (
    <DiformInfoProvider value={nextDiformInfoContext}>{props.children}</DiformInfoProvider>
  );
};
