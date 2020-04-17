import React from 'react';
import { Row, Col } from 'react-grid-system';
import { css } from 'emotion';
import FollowerCard from './FollowerCard';

function FollowerContainer() {
  return (
    <Row className={css`
      margin-top: 3rem;
    `}>
      <Col md={3}>
        <FollowerCard />
      </Col>
      <Col md={3}>
        <FollowerCard />
      </Col>
      <Col md={3}>
        <FollowerCard />
      </Col>
      <Col md={3}>
        <FollowerCard />
      </Col>
    </Row>
  )
}

export default FollowerContainer;