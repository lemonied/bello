import { ConfigProvider } from 'antd';
import { useCallback, useContext } from 'react';
import { DiffFormConfigContext, DIFF_FORM_I18N, DIFF_STATUS_COLOR } from '../utils';
import type { StatusInfo, StatusCode } from '../utils';

export const useDiffFormConfig = () => {
  return useContext(DiffFormConfigContext);
};

export const useDiffFormI18n = () => {
  const config = useContext(ConfigProvider.ConfigContext);
  const diffFormConfig = useDiffFormConfig();
  const locale = config.locale?.locale ?? 'en';
  return useCallback((code: StatusCode) => {
    const customLocale = diffFormConfig?.locale;
    const defaultLocale = DIFF_FORM_I18N[locale] ?? DIFF_FORM_I18N.en;
    const map = Object.assign({}, defaultLocale, customLocale);
    return map[code] ?? code;
  }, [locale, diffFormConfig?.locale]);
};

export const useDiffFormCombineConfig = () => {
  const intl = useDiffFormI18n();
  const diffFormConfig = useDiffFormConfig();
  return useCallback((statusCode?: StatusCode) => {
    if (statusCode) {
      return {
        code: statusCode,
        text: intl(statusCode),
        color: diffFormConfig?.color?.[statusCode] ?? DIFF_STATUS_COLOR[statusCode],
      } as StatusInfo;
    }
  }, [diffFormConfig?.color, intl]);
};
