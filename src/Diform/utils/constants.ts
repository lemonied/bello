import type { StatusCode, StatusInfo } from './model';

export const DIFF_STATUS: Record<StatusCode, StatusInfo> = {
  REMOVE: {
    code: 'REMOVE',
    color: '#ff4d4f',
    text: '删除',
  },
  ADD: {
    code: 'ADD',
    color: '#52c41a',
    text: '新增',
  },
  MODIFY: {
    code: 'MODIFY',
    color: '#faad14',
    text: '修改',
  },
  EMPTY: {
    code: 'EMPTY',
    color: '#d9d9d9',
    text: '空',
  },
};

export enum DiformTypes {
  SOURCE = '_DIFORM_TYPE_SOURCE_',
  TARGET = '_DIFORM_TYPE_TARGET_',
}
