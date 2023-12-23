import { isEqual } from 'lodash';
import { DIFF_STATUS, DiformTypes } from './constants';

export function _isEmpty(val: any) {
  return typeof val === 'undefined' ||
    val === null ||
    val === '';
}

export function _isEqual(source: any, target: any) {
  if (_isEmpty(source) && _isEmpty(target)) {
    return true;
  }
  return isEqual(source, target);
}

export const getStatusInfo = (currentValue: any, anotherValue: any, type: DiformTypes) => {
  if (_isEmpty(currentValue) && !_isEmpty(anotherValue)) {
    if (type === DiformTypes.SOURCE) {
      return DIFF_STATUS.EMPTY;
    }
    return DIFF_STATUS.REMOVE;
  }
  if (!_isEmpty(currentValue) && _isEmpty(anotherValue)) {
    if (type === DiformTypes.SOURCE) {
      return DIFF_STATUS.REMOVE;
    }
    return DIFF_STATUS.ADD;
  }
  if (!_isEqual(currentValue, anotherValue)) {
    return DIFF_STATUS.MODIFY;
  }
};
