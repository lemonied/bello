import React from 'react';
import { DiformComponentProps } from '../utils';
import { Col, Row } from 'antd';

export const DifComponent = (props: DiformComponentProps) => {

  const { source, target } = props;

  return (
    <Row gutter={[8, 8]}>
      <Col span={24} lg={12}>{source}</Col>
      <Col span={24} lg={12}>{target}</Col>
    </Row>
  );
};
