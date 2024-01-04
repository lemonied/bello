import React from 'react';
import { Col, Collapse, Input, InputNumber, Row } from 'antd';
import { DiformConfigProvider, DiformComponentProps, Diform } from 'bello';

const Custom = (props: DiformComponentProps) => {

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
    <DiformConfigProvider
      component={Custom}
    >
      <Diform
        layout={'vertical'}
        diff
        initialValues={{
          year: '2024',
          income: 10000,
        }}
      >
        <Row gutter={8}>
          <Col span={12}>
            <Diform.Item
              label={'年份'}
              name={'year'}
            >
              <Input />
            </Diform.Item>
          </Col>
          <Col span={12}>
            <Diform.Item
              label={'收入'}
              name={'income'}
            >
              <InputNumber min={1} />
            </Diform.Item>
          </Col>
        </Row>
      </Diform>
    </DiformConfigProvider>
  );
};
