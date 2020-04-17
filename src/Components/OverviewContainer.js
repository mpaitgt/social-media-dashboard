import React from 'react';
import { css } from 'emotion';
import { Row, Col } from 'react-grid-system';
import OverviewCard from './OverviewCard';

function OverviewContainer(props) {
  return (
    <Row>
      <Col md={3}>
        <OverviewCard darkMode={props.darkMode} />
      </Col>
      <Col md={3}>
        <OverviewCard darkMode={props.darkMode} />
      </Col>
      <Col md={3}>
        <OverviewCard darkMode={props.darkMode} />
      </Col>
      <Col md={3}>
        <OverviewCard darkMode={props.darkMode} />
      </Col>
      <Col md={3}>
        <OverviewCard darkMode={props.darkMode} />
      </Col>
      <Col md={3}>
        <OverviewCard darkMode={props.darkMode} />
      </Col>
      <Col md={3}>
        <OverviewCard darkMode={props.darkMode} />
      </Col>
      <Col md={3}>
        <OverviewCard darkMode={props.darkMode} />
      </Col>
    </Row>
  )
}   

export default OverviewContainer;