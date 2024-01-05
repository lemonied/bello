import { useEffect, useMemo, useState } from 'react';
import { useDiformContext } from './useDiformContext';

export const useDiffStatus = () => {
  const { statusInfo, firstStatus } = useDiformContext();
  const [avaliable, setAvaliable] = useState(false);
  useEffect(() => {
    // 防抖，前300毫秒不显示diff状态信息
    const timer = setTimeout(() => setAvaliable(true), 300);
    return () => clearTimeout(timer);
  }, []);
  const ret = useMemo(() => {
    return firstStatus ? statusInfo : null;
  }, [firstStatus, statusInfo]);
  return avaliable ? ret : null;
};
