export type NamePaths = (string | number)[];

export type NamePath = string | number | NamePaths;

export enum StatusCode {
  REMOVE = 'REMOVE',
  ADD = 'ADD',
  MODIFY = 'MODIFY',
  EMPTY = 'EMPTY',
}

export interface StatusInfo {
  code: StatusCode,
  color: string;
  text: string;
}

export enum DiffFormTypes {
  SOURCE = '_DIFF_FORM_TYPE_SOURCE_',
  TARGET = '_DIFF_FORM_TYPE_TARGET_',
}
