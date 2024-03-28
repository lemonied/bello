import React from 'react';
import type { DiffFormComponentProps } from '../utils';
import { Col, Row } from 'antd';

export const DiffComponent = (props: DiffFormComponentProps) => {

  const { source, target } = props;

  return (
    <Row gutter={[8, 8]}>
      <Col span={24} lg={12}>{source}</Col>
      <Col span={24} lg={12}>{target}</Col>
    </Row>
  );
};
