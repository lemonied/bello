---
title: Diform
---

# 表单差异对比组件

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

#### 自定义diff样式
<code src="./examples/CustomDiff.tsx"></code>

## API

### Diform

> 继承 antd - [Form](https://ant-design.antgroup.com/components/form-cn#form)

|属性|说明|类型|默认值|
|---|---|---|---|
|diff|是否开启diff对比|[FormProps](https://ant-design.antgroup.com/components/form-cn#form) \| `true`|`void`|

### Diform.Item

> 继承 antd - [Form.Item](https://ant-design.antgroup.com/components/form-cn#formitem)

|属性|说明|类型|默认值|
|---|---|---|---|
|noStatus|不显示默认的diff样式 - 优先级低于`noStyle`|`boolean`|`false`|

### Diform.List

> 继承 antd - [Form.List](https://ant-design.antgroup.com/components/form-cn#formlist)

|属性|说明|类型|默认值|
|---|---|---|---|
|uniqueKey|列表项的唯一key|[NamePath](#namepath)|`void`|

### Diform.ListItem

> 包裹在`Diform.List`下每一项的最外层 `必需`

|属性|说明|类型|默认值|
|---|---|---|---|
|fieldName|当前项的`field.name`|`number`|`void`|
|noStatus|不显示默认的diff样式|`boolean`|`false`|

## hooks

|hook|描述|返回值|
|---|---|---|
|Diform.useDiformInfo|`用于在较复杂的表单后代组件中获取Form的基本信息`|[DiformInfo](#diforminfo)|
|Diform.useForm|继承 `Form.useForm`|[Form.useForm](https://ant-design.antgroup.com/components/form-cn#formuseform)|
|Diform.useFormInstance|继承 `Form.useFormInstance`|[Form.useFormInstance](https://ant-design.antgroup.com/components/form-cn#formuseforminstance)|
|Diform.useWatch|继承 `Form.useWatch`|[Form.useWatch](https://ant-design.antgroup.com/components/form-cn#formusewatch)|
|Diform.Item.useStatus|继承 `Form.Item.useStatus`|[Form.Item.useStatus](https://ant-design.antgroup.com/components/form-cn#formitemusestatus)|


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

### DiformInfo
```ts
interface DiformInfo {
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
