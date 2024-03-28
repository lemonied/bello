import React from 'react';
import { Col, Collapse, Input, InputNumber, Row } from 'antd';
import { DiffFormConfigProvider, DiffFormComponentProps, DiffForm } from 'bello';

const Custom = (props: DiffFormComponentProps) => {

  const { source, target } = props;

  return (
    <Collapse
      defaultActiveKey={['target']}
      items={[
        {
          key: 'source',
          label: '变更前',
          children: source,
          forceRender: true,
        },
        {
          key: 'target',
          label: '变更后',
          children: target,
          forceRender: true,
        },
      ]}
    />
  );
};

export default () => {
  return (
    <DiffFormConfigProvider
      component={Custom}
    >
      <DiffForm
        layout={'vertical'}
        diff
        initialValues={{
          year: '2024',
          income: 10000,
        }}
      >
        <Row gutter={8}>
          <Col span={12}>
            <DiffForm.Item
              label={'年份'}
              name={'year'}
            >
              <Input />
            </DiffForm.Item>
          </Col>
          <Col span={12}>
            <DiffForm.Item
              label={'收入'}
              name={'income'}
            >
              <InputNumber min={1} style={{ width: '100%' }} />
            </DiffForm.Item>
          </Col>
        </Row>
      </DiffForm>
    </DiffFormConfigProvider>
  );
};
