export type NamePaths = (string | number)[];

export type NamePath = string | number | NamePaths;

export type StatusCode = 'REMOVE' | 'ADD' | 'MODIFY' | 'EMPTY';

export interface StatusInfo {
  code: StatusCode,
  color: string;
  text: string;
}
