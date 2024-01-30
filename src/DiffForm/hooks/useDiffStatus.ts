import { useEffect, useMemo, useState } from 'react';
import { useDiffFormContext } from './useDiffFormContext';

export const useDiffStatus = () => {
  const { statusInfo, firstStatus } = useDiffFormContext();
  const [avaliable, setAvaliable] = useState(false);
  useEffect(() => {
    // 防抖，前350毫秒不显示diff状态信息
    const timer = setTimeout(() => setAvaliable(true), 350);
    return () => clearTimeout(timer);
  }, []);
  const ret = useMemo(() => {
    return firstStatus ? statusInfo : undefined;
  }, [firstStatus, statusInfo]);
  return avaliable ? ret : undefined;
};
