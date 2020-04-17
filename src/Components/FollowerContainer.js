import React from 'react';
import { Row, Col } from 'react-grid-system';
import { css } from 'emotion';
import FollowerCard from './FollowerCard';

function FollowerContainer(props) {
  return (
    <Row className={css`
      margin-top: 1rem;
    `}>
      <Col md={3}>
        <FollowerCard darkMode={props.darkMode} />
      </Col>
      <Col md={3}>
        <FollowerCard darkMode={props.darkMode} />
      </Col>
      <Col md={3}>
        <FollowerCard darkMode={props.darkMode} />
      </Col>
      <Col md={3}>
        <FollowerCard darkMode={props.darkMode} />
      </Col>
    </Row>
  )
}

export default FollowerContainer;