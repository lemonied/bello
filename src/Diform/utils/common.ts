export function _isEmpty(val: any) {
  // 一般情况下，在表单数据中，undefined、null、''、空数组都会被认为是空
  return typeof val === 'undefined' ||
    val === null ||
    val === '' ||
    (Array.isArray(val) && val.length === 0);
}
