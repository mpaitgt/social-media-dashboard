import React from 'react';
import { css } from 'emotion';
import { Row, Col } from 'react-grid-system';
import OverviewCard from './OverviewCard';
import Data from '../Utils/data.json';

function OverviewContainer(props) {
  return (
    <Row>
      {
        Data['social_media'].map(data => {
          return (
            <Col md={3}>
              <OverviewCard data={data} darkMode={props.darkMode} />
            </Col>
          )
        })
      }
    </Row>
  )
}   

export default OverviewContainer;