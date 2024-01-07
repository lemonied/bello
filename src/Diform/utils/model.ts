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

export enum DiformTypes {
  SOURCE = '_DIFORM_TYPE_SOURCE_',
  TARGET = '_DIFORM_TYPE_TARGET_',
}
