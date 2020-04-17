import React from 'react';
import { css } from 'emotion';
import { Row, Col } from 'react-grid-system';
import OverviewCard from './OverviewCard';

function OverviewContainer() {
  return (
    <Row>
      <Col md={3}>
        <OverviewCard />
      </Col>
      <Col md={3}>
        <OverviewCard />
      </Col>
      <Col md={3}>
        <OverviewCard />
      </Col>
      <Col md={3}>
        <OverviewCard />
      </Col>
      <Col md={3}>
        <OverviewCard />
      </Col>
      <Col md={3}>
        <OverviewCard />
      </Col>
      <Col md={3}>
        <OverviewCard />
      </Col>
      <Col md={3}>
        <OverviewCard />
      </Col>
    </Row>
  )
}   

export default OverviewContainer;