import React, { type ReactNode, useMemo, type Ref } from 'react';
import { Form, type FormProps, type FormInstance } from 'antd';
import { DiffItem } from './DiffItem';
import { DiffList } from './DiffList';
import { DiffListItem } from './DiffListItem';
import { DiffInfo } from './DiffInfo';
import { Store, DiffFormProvider, DiffFormTypes, DiffFormInfoProvider } from '../utils';
import type { DiffFormContextValue, DiffFormInfo } from '../utils';
import { useDiffStatus, useDiffFormConfig, useDiffFormInfo } from '../hooks';
import { DiffComponent } from './DiffComponent';
import { DiffStatus } from './DiffStatus';

export interface DiffFormProps<Values=any> extends FormProps<Values> {
  diff?: Omit<DiffFormProps<Values>, 'diff' | 'children'> | boolean;
  ref?: Ref<FormInstance<Values>> | undefined;
  children?: ReactNode;
}
export interface DiffFormType {
  <Values = any>(props: DiffFormProps<Values>): React.JSX.Element;
  Item: typeof DiffItem;
  List: typeof DiffList;
  ListItem: typeof DiffListItem;
  ErrorList: typeof Form.ErrorList;
  Info: typeof DiffInfo;
  DiffStatus: typeof DiffStatus;
  useForm: typeof Form.useForm;
  useFormInstance: typeof Form.useFormInstance;
  useWatch: typeof Form.useWatch;
  useDiffFormInfo: typeof useDiffFormInfo;
  useDiffFormStatus: typeof useDiffStatus;
}
const DiffForm: DiffFormType = (props) => {

  const { diff, ...extraProps } = props;

  const config = useDiffFormConfig();

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

  const sharedContext = useMemo<DiffFormContextValue>(() => {
    return {
      store: new Store(),
      fullNamePath: [],
      anotherFullNamePath: [],
    };
  }, []);

  const sourceContext = useMemo<DiffFormContextValue>(() => {
    return {
      type: DiffFormTypes.SOURCE,
    };
  }, []);

  const targetContext = useMemo<DiffFormContextValue>(() => {
    return {
      type: DiffFormTypes.TARGET,
    };
  }, []);

  const sourceInfoContext = useMemo<DiffFormInfo>(() => {
    return {
      type: sourceContext.type,
      name: sourceProps?.name,
      disabled: sourceProps?.disabled,
      namePaths: [],
    };
  }, [sourceProps?.disabled, sourceProps?.name, sourceContext.type]);

  const targetInfoContext = useMemo<DiffFormInfo>(() => {
    return {
      type: targetContext.type,
      name: targetProps?.name,
      disabled: targetProps?.disabled,
      namePaths: [],
    };
  }, [targetProps?.disabled, targetProps?.name, targetContext.type]);

  const DiffFormComponent = useMemo(() => {
    return config?.component ?? DiffComponent;
  }, [config?.component]);

  if (sourceProps) {
    return (
      <DiffFormProvider value={sharedContext}>
        <DiffFormInfoProvider value={{ diffEnable: true }}>
          <DiffFormComponent
            source={
              <DiffFormInfoProvider value={sourceInfoContext}>
                <DiffFormProvider value={sourceContext}>
                  <Form {...sourceProps}>{targetProps.children}</Form>
                </DiffFormProvider>
              </DiffFormInfoProvider>
            }
            target={
              <DiffFormInfoProvider value={targetInfoContext}>
                <DiffFormProvider value={targetContext}>
                  <Form {...targetProps} />
                </DiffFormProvider>
              </DiffFormInfoProvider>
            }
          />
        </DiffFormInfoProvider>
      </DiffFormProvider>
    );
  }

  return (
    <DiffFormInfoProvider value={targetInfoContext}>
      <Form {...targetProps} />
    </DiffFormInfoProvider>
  );
};

DiffForm.Item = DiffItem;
DiffForm.List = DiffList;
DiffForm.ListItem = DiffListItem;
DiffForm.ErrorList = Form.ErrorList;
DiffForm.Info = DiffInfo;
DiffForm.DiffStatus = DiffStatus;
DiffForm.useForm = Form.useForm;
DiffForm.useFormInstance = Form.useFormInstance;
DiffForm.useWatch = Form.useWatch;
DiffForm.useDiffFormInfo = useDiffFormInfo;
DiffForm.useDiffFormStatus = useDiffStatus;

export { DiffForm };
