import { ConfigProvider } from 'antd';
import { useCallback, useContext } from 'react';
import { StatusInfo, DiformConfigContext, DIFORM_I18N, StatusCode, DIFF_STATUS_COLOR } from '../utils';

export const useDiformConfig = () => {
  return useContext(DiformConfigContext);
};

export const useDiformI18n = () => {
  const config = useContext(ConfigProvider.ConfigContext);
  const diformConfig = useDiformConfig();
  const locale = config.locale?.locale ?? 'en';
  return useCallback((code: StatusCode) => {
    const customLocale = diformConfig?.locale;
    const defaultLocale = DIFORM_I18N[locale] ?? DIFORM_I18N.en;
    const map = Object.assign({}, defaultLocale, customLocale);
    return map[code] ?? code;
  }, [locale, diformConfig?.locale]);
};

export const useDiformCombineConfig = () => {
  const intl = useDiformI18n();
  const diformConfig = useDiformConfig();
  return useCallback((statusCode?: StatusCode) => {
    if (statusCode) {
      return {
        code: statusCode,
        text: intl(statusCode),
        color: diformConfig?.color?.[statusCode] ?? DIFF_STATUS_COLOR[statusCode],
      } as StatusInfo;
    }
  }, [diformConfig?.color, intl]);
};
