import React, { useMemo } from 'react';
import type { FC, ReactNode } from 'react';
import { DiffFormInfoProvider, DiffFormProvider, DiffFormTypes, StatusCode } from '../utils';
import type { DiffFormContextValue, DiffFormInfo } from '../utils';
import { useDiffFormCombineConfig, useDiffFormConfig, useDiffFormContext, useDiffFormInfo, useNextAnotherFieldName } from '../hooks';
import { DiffFormMark } from './DiffFormMark';

export interface DiffListItemProps {
  fieldName: number;
  children?: ReactNode;
  noStatus?: boolean;
}
const DiffListItemContent: FC<Omit<DiffListItemProps, 'fieldName'>> = (props) => {
  const { children, noStatus } = props;
  const { fieldName } = useDiffFormInfo();
  const nextAnotherFieldName = useNextAnotherFieldName(fieldName);
  const { statusInfo, type, firstStatus } = useDiffFormContext();
  const combineConfig = useDiffFormCombineConfig();
  const config = useDiffFormConfig();
  const nextStatusInfo = useMemo(() => {
    if (statusInfo) {
      return statusInfo;
    }
    if (typeof nextAnotherFieldName !== 'number') {
      if (type === DiffFormTypes.SOURCE) {
        return combineConfig(StatusCode.REMOVE);
      }
      return combineConfig(StatusCode.ADD);
    }
  }, [nextAnotherFieldName, statusInfo, type, combineConfig]);

  const nextContext = useMemo<DiffFormContextValue>(() => {
    return {
      fieldName,
      anotherFieldName: nextAnotherFieldName,
      statusInfo: nextStatusInfo,
      firstStatus: !firstStatus && !statusInfo && !!nextStatusInfo,
    };
  }, [fieldName, firstStatus, nextAnotherFieldName, nextStatusInfo, statusInfo]);

  const Wrapper = useMemo(() => {
    return config?.wrapper ?? DiffFormMark;
  }, [config?.wrapper]);

  return (
    <DiffFormProvider value={nextContext}>
      {
        noStatus ?
          children :
          <Wrapper>{children}</Wrapper>
      }
    </DiffFormProvider>
  );
};
export const DiffListItem: FC<DiffListItemProps> = (props) => {
  const context = useDiffFormContext();

  const nextDiffFormInfoContext = useMemo<DiffFormInfo>(() => {
    return {
      fieldName: props.fieldName,
    };
  }, [props.fieldName]);

  if (typeof context.type !== 'undefined') {
    return (
      <DiffFormInfoProvider value={nextDiffFormInfoContext}>
        <DiffListItemContent {...props} />
      </DiffFormInfoProvider>
    );
  }
  return (
    <DiffFormInfoProvider value={nextDiffFormInfoContext}>{props.children}</DiffFormInfoProvider>
  );
};
