import type { StatusCode, StatusInfo } from './model';

export const DIFF_STATUS: Record<StatusCode, StatusInfo> = {
  REMOVE: {
    code: 'REMOVE',
    color: '#ff4d4f',
  },
  ADD: {
    code: 'ADD',
    color: '#52c41a',
  },
  MODIFY: {
    code: 'MODIFY',
    color: '#faad14',
  },
  EMPTY: {
    code: 'EMPTY',
    color: '#d9d9d9',
  },
};

export enum DiformTypes {
  SOURCE = '_DIFORM_TYPE_SOURCE_',
  TARGET = '_DIFORM_TYPE_TARGET_',
}
