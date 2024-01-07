import React, { useMemo } from 'react';
import type { FC, ReactNode } from 'react';
import { DiformInfoProvider, DiformProvider, DiformTypes, StatusCode } from '../utils';
import type { DiformContextValue, DiformInfo } from '../utils';
import { useDiformCombineConfig, useDiformConfig, useDiformContext, useDiformInfo, useNextAnotherFieldName } from '../hooks';
import { DiformMark } from './DiformMark';

export interface DifListItemProps {
  fieldName: number;
  children?: ReactNode;
  noStatus?: boolean;
}
const DifListItemContent: FC<Omit<DifListItemProps, 'fieldName'>> = (props) => {
  const { children, noStatus } = props;
  const { fieldName } = useDiformInfo();
  const nextAnotherFieldName = useNextAnotherFieldName(fieldName);
  const { statusInfo, type, firstStatus } = useDiformContext();
  const combineConfig = useDiformCombineConfig();
  const config = useDiformConfig();
  const nextStatusInfo = useMemo(() => {
    if (statusInfo) {
      return statusInfo;
    }
    if (typeof nextAnotherFieldName !== 'number') {
      if (type === DiformTypes.SOURCE) {
        return combineConfig(StatusCode.REMOVE);
      }
      return combineConfig(StatusCode.ADD);
    }
  }, [nextAnotherFieldName, statusInfo, type, combineConfig]);

  const nextContext = useMemo<DiformContextValue>(() => {
    return {
      fieldName,
      anotherFieldName: nextAnotherFieldName,
      statusInfo: nextStatusInfo,
      firstStatus: !firstStatus && !statusInfo && !!nextStatusInfo,
    };
  }, [fieldName, firstStatus, nextAnotherFieldName, nextStatusInfo, statusInfo]);

  const Wrapper = useMemo(() => {
    return config?.wrapper ?? DiformMark;
  }, [config?.wrapper]);

  return (
    <DiformProvider value={nextContext}>
      {
        noStatus ?
          children :
          <Wrapper>{children}</Wrapper>
      }
    </DiformProvider>
  );
};
export const DifListItem: FC<DifListItemProps> = (props) => {
  const context = useDiformContext();

  const nextDiformInfoContext = useMemo<DiformInfo>(() => {
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
