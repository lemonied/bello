import { StatusCode } from './model';

export const DIFORM_I18N: Record<string, Record<StatusCode, string>> = {
  'zh-cn': {
    ADD: '新增',
    REMOVE: '删除',
    MODIFY: '修改',
    EMPTY: '空',
  },
  'en': {
    ADD: 'New',
    REMOVE: 'Remove',
    MODIFY: 'Modified',
    EMPTY: 'Empty',
  },
};

export const DIFF_STATUS_COLOR: Record<StatusCode, string> = {
  [StatusCode.REMOVE]: '#ff4d4f',
  [StatusCode.ADD]: '#52c41a',
  [StatusCode.MODIFY]: '#faad14',
  [StatusCode.EMPTY]: '#d9d9d9',
};
