import React from 'react';
import { Row, Col } from 'react-grid-system';
import { css } from 'emotion';
import FollowerCard from './FollowerCard';
import Data from '../Utils/data.json';

function FollowerContainer(props) {
  return (
    <Row className={css`margin-top: 1rem;`}>
      {Data['social_media'].map(data => {
        return (
          <Col md={3}>
            <FollowerCard data={data} darkMode={props.darkMode} />
          </Col>
        )
      })}
    </Row>
  )
}

export default FollowerContainer;