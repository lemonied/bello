import React, { type ReactNode, useMemo, type Ref } from 'react';
import { Form, type FormProps, type FormInstance } from 'antd';
import { DifItem } from './DifItem';
import { DifList } from './DifList';
import { DifListItem } from './DifListItem';
import { DifInfo } from './DifInfo';
import { Store, DiformProvider, DiformTypes, DiformInfoProvider } from '../utils';
import type { DiformContextValue, DiformInfo } from '../utils';
import { useDiffStatus, useDiformConfig, useDiformInfo } from '../hooks';
import { DifComponent } from './DifComponent';
import { DifStatus } from './DifStatus';

export interface DiformProps<Values=any> extends FormProps<Values> {
  diff?: Omit<DiformProps<Values>, 'diff' | 'children'> | boolean;
  ref?: Ref<FormInstance<Values>> | undefined;
  children?: ReactNode;
}
export interface DiformType {
  <Values = any>(props: DiformProps<Values>): React.JSX.Element;
  Item: typeof DifItem;
  List: typeof DifList;
  ListItem: typeof DifListItem;
  ErrorList: typeof Form.ErrorList;
  Info: typeof DifInfo;
  DifStatus: typeof DifStatus;
  useForm: typeof Form.useForm;
  useFormInstance: typeof Form.useFormInstance;
  useWatch: typeof Form.useWatch;
  useDiformInfo: typeof useDiformInfo;
  useDiformStatus: typeof useDiffStatus;
}
const Diform: DiformType = (props) => {

  const { diff, ...extraProps } = props;

  const config = useDiformConfig();

  const sourceProps = useMemo(() => {
    const defaultProps: FormProps = {
      layout: extraProps.layout,
      component: extraProps.component,
      name: 'source',
    };
    if (diff === true) {
      return defaultProps;
    }
    if (diff) {
      return {
        ...defaultProps,
        ...diff,
      };
    }
  }, [diff, extraProps.layout, extraProps.component]);

  const targetProps = useMemo(() => {
    return {
      name: sourceProps ? 'target' : undefined,
      ...extraProps,
    };
  }, [extraProps, sourceProps]);

  const sharedContext = useMemo<DiformContextValue>(() => {
    return {
      store: new Store(),
      fullNamePath: [],
      anotherFullNamePath: [],
    };
  }, []);

  const sourceContext = useMemo<DiformContextValue>(() => {
    return {
      type: DiformTypes.SOURCE,
    };
  }, []);

  const targetContext = useMemo<DiformContextValue>(() => {
    return {
      type: DiformTypes.TARGET,
    };
  }, []);

  const sourceInfoContext = useMemo<DiformInfo>(() => {
    return {
      type: sourceContext.type,
      name: sourceProps?.name,
      disabled: sourceProps?.disabled,
      namePaths: [],
    };
  }, [sourceProps?.disabled, sourceProps?.name, sourceContext.type]);

  const targetInfoContext = useMemo<DiformInfo>(() => {
    return {
      type: targetContext.type,
      name: targetProps?.name,
      disabled: targetProps?.disabled,
      namePaths: [],
    };
  }, [targetProps?.disabled, targetProps?.name, targetContext.type]);

  const DiformComponent = useMemo(() => {
    return config?.component ?? DifComponent;
  }, [config?.component]);

  if (sourceProps) {
    return (
      <DiformProvider value={sharedContext}>
        <DiformComponent
          source={
            <DiformInfoProvider value={sourceInfoContext}>
              <DiformProvider value={sourceContext}>
                <Form {...sourceProps}>{targetProps.children}</Form>
              </DiformProvider>
            </DiformInfoProvider>
          }
          target={
            <DiformInfoProvider value={targetInfoContext}>
              <DiformProvider value={targetContext}>
                <Form {...targetProps} />
              </DiformProvider>
            </DiformInfoProvider>
          }
        />
      </DiformProvider>
    );
  }

  return (
    <DiformInfoProvider value={targetInfoContext}>
      <Form {...targetProps} />
    </DiformInfoProvider>
  );
};

Diform.Item = DifItem;
Diform.List = DifList;
Diform.ListItem = DifListItem;
Diform.ErrorList = Form.ErrorList;
Diform.Info = DifInfo;
Diform.DifStatus = DifStatus;
Diform.useForm = Form.useForm;
Diform.useFormInstance = Form.useFormInstance;
Diform.useWatch = Form.useWatch;
Diform.useDiformInfo = useDiformInfo;
Diform.useDiformStatus = useDiffStatus;

export { Diform };
