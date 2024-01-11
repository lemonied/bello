---
title: DiffForm-表单差异对比
---

# 表单差异对比组件

某些业务场景下，需要将表单变更前后的差异更直观的展示出来

## 组件优势/原则
- 二次开发`antd Form`，原API保持不变，最小的改造成本
- 表单代码只需要写一次，通过配置项开启/关闭Diff差异对比，最小的开发成本

## 示例

### 动态表单对比

<code src="./examples/DynamicDiff.tsx"></code>

### Tabs类型的Form List

<code src="./examples/TabList.tsx"></code>

### 自定义配置

#### 使用默认文案
<code src="./examples/DefaultI18n.tsx"></code>

#### 自定义文案
<code src="./examples/CustomI18n.tsx"></code>

#### 自定义颜色
<code src="./examples/CustomColor.tsx"></code>

#### 自定义diff样式（单个表单项） 
<code src="./examples/CustomDiff.tsx"></code>

#### 自定义diff样式（通过Provider全量自定义）
<code src="./examples/CustomWrapper.tsx"></code>

#### 自定义变更前后表单布局
<code src="./examples/CustomComponent.tsx"></code>

## API

### DiffForm

> 继承 antd - [Form](https://ant-design.antgroup.com/components/form-cn#form)

| 属性 | 说明             | 类型                                                                           | 默认值 |
| ---- | ---------------- | ------------------------------------------------------------------------------ | ------ |
| diff | 是否开启diff对比 | [FormProps](https://ant-design.antgroup.com/components/form-cn#form) \| `true` | `void` |

### DiffForm.Item

> 继承 antd - [Form.Item](https://ant-design.antgroup.com/components/form-cn#formitem)

| 属性     | 说明                                       | 类型      | 默认值  |
| -------- | ------------------------------------------ | --------- | ------- |
| noStatus | 不显示默认的diff样式 - 优先级低于`noStyle` | `boolean` | `false` |

### DiffForm.List

> 继承 antd - [Form.List](https://ant-design.antgroup.com/components/form-cn#formlist)

| 属性      | 说明                      | 类型                  | 默认值 |
| --------- | ------------------------- | --------------------- | ------ |
| uniqueKey | 列表项的唯一key（非必填） | [NamePath](#namepath) | `void` |

### DiffForm.ListItem

> 包裹在`DiffForm.List`下每一项的最外层 `必需`

| 属性      | 说明                 | 类型      | 默认值  |
| --------- | -------------------- | --------- | ------- |
| fieldName | 当前项的`field.name` | `number`  | `void`  |
| noStatus  | 不显示默认的diff样式 | `boolean` | `false` |

### DiffForm.ErrorList

> 继承 antd - [Form.ErrorList](https://ant-design.antgroup.com/components/form-cn#formerrorlist)

### DiffForm.Info

| 属性     | 说明     | 类型                                                           | 默认值 |
| -------- | -------- | -------------------------------------------------------------- | ------ |
| children | 子代元素 | (diffFormInfo: [DiffFormInfo](#diffforminfo-1)) => `ReactNode` | `void` |

### DiffForm.DiffStatus

> 获取父代的diff状态信息

| 属性     | 说明     | 类型                                                   | 默认值 |
| -------- | -------- | ------------------------------------------------------ | ------ |
| children | 子代元素 | (diffStatus: [StatusInfo](#statusinfo)) => `ReactNode` | `void` |

## Provider

### DiffFormConfigProvider
| 属性      | 说明                   | 类型                                                                   | 默认值                                                                     |
| --------- | ---------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| locale    | 多语言文案             | `Record<string, string>`                                               | `{ADD: '新增', REMOVE: '删除', MODIFY: '修改', EMPTY: '空'}`               |
| color     | diff线条颜色           | `Record<string, string>`                                               | `{ADD: '#52c41a', REMOVE: '#ff4d4f', MODIFY: '#faad14', EMPTY: '#d9d9d9'}` |
| component | 自定义差异表单布局方式 | `FC<DiffFormComponentProps> \| ComponentClass<DiffFormComponentProps>` | `左右布局`                                                                 |
| wrapper   | 自定义表单项diff样式   | `FC<any> \| ComponentClass<any>`                                       | `虚线线框`                                                                 |

## hooks

| hook                       | 描述                                                     | 返回值                                                                                         |
| -------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| DiffForm.useDiffFormInfo   | `用于在较复杂的表单后代组件中获取Form的基本信息`         | [DiffFormInfo](#diffforminfo-1)                                                                |
| DiffForm.useDiffFormStatus | `自定义表单项或diff样式时，用于获取当前表单项的变更状态` | [StatusInfo](#statusinfo)                                                                      |
| DiffForm.useForm           | 继承 `Form.useForm`                                      | [Form.useForm](https://ant-design.antgroup.com/components/form-cn#formuseform)                 |
| DiffForm.useFormInstance   | 继承 `Form.useFormInstance`                              | [Form.useFormInstance](https://ant-design.antgroup.com/components/form-cn#formuseforminstance) |
| DiffForm.useWatch          | 继承 `Form.useWatch`                                     | [Form.useWatch](https://ant-design.antgroup.com/components/form-cn#formusewatch)               |
| DiffForm.Item.useStatus    | 继承 `Form.Item.useStatus`                               | [Form.Item.useStatus](https://ant-design.antgroup.com/components/form-cn#formitemusestatus)    |

## 类型

### FormInstance

继承自 antd [FormInstance](https://ant-design.antgroup.com/components/form-cn#forminstance)

### NamePaths

```ts
type NamePaths = (string | number)[];
```

### NamePath

```ts
type NamePath = string | number | (string | number)[];
```

### DiffFormInfo
```ts
interface DiffFormInfo {
  /**
   * @description 当前Form类型（source/target）
   */
  type?: DiffFormTypes;
  /**
   * @description Form的disabled属性
   */
  disabled?: boolean;
  /**
   * @description Form的name属性
   */
  name?: string;
  /**
   * @description 所有父级name的联合
   */
  namePaths?: NamePaths;
  /**
   * @description 当前FormListItem的field.name
   */
  fieldName?: number;
}
```

### DiffFormTypes
```ts
export enum DiffFormTypes {
  SOURCE = '_DIFF_FORM_TYPE_SOURCE_',
  TARGET = '_DIFF_FORM_TYPE_TARGET_',
}
```

### StatusInfo
```ts
export interface StatusInfo {
  code: StatusCode,
  color: string;
  text: string;
}
```

### StatusCode
```ts
export enum StatusCode {
  REMOVE = 'REMOVE',
  ADD = 'ADD',
  MODIFY = 'MODIFY',
  EMPTY = 'EMPTY',
}
```

### DiffFormComponentProps
```ts
export interface DiffFormComponentProps {
  source?: ReactNode;
  target?: ReactNode;
}
```

## FAQ

### 为什么要显示两个完整的表单来对比差异？

表单场景往往非常复杂，存在各种表单联动场景，如果只显示一个表单的话，一些表单项因为联动或删除而导致的隐藏将不会显示在页面上，从而导致数据审查上的遗漏。

### 为什么两个相同的值状态却显示“修改”？

请确定这两条数据的数据类型相同，字符串`"0"`不等于数字`0`

另外：
- 当数据为`undefined`、`null`、`''`、`[]`时，这个字段将被认为是`空`;  
- 两个数据的对比方式使用`lodash.isEqual`;
