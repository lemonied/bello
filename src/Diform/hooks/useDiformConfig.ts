import { ConfigProvider } from 'antd';
import { useCallback, useContext } from 'react';
import { StatusInfo, DiformConfigContext } from '../utils';

const i18n: Record<string, Record<string, string>> = {
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

export const useDiformConfig = () => {
  return useContext(DiformConfigContext);
};

export const useDiformI18n = () => {
  const config = useContext(ConfigProvider.ConfigContext);
  const diformConfig = useDiformConfig();
  const locale = config.locale?.locale ?? 'en';
  return useCallback((code: string) => {
    const customLocale = diformConfig?.locale;
    const defaultLocale = i18n[locale] ?? i18n.en;
    const map = Object.assign({}, defaultLocale, customLocale);
    return map[code] ?? code;
  }, [locale, diformConfig?.locale]);
};

export const useDiformCombineConfig = () => {
  const intl = useDiformI18n();
  const diformConfig = useDiformConfig();
  return useCallback((statusInfo?: StatusInfo) => {
    if (statusInfo) {
      return {
        ...statusInfo,
        text: intl(statusInfo.code),
        color: diformConfig?.color?.[statusInfo.code] ?? statusInfo.color,
      };
    }
  }, [diformConfig?.color, intl]);
};
