import React from 'react';
import { Row, Col } from 'react-grid-system';
import { css } from 'emotion';
import FollowerCard from './FollowerCard';
import Data from '../Utils/data.json';

function FollowerContainer(props) {


  return (
    <Row className={css`margin-top: 1rem;`}>
      {
        Data['social_media'].map(data => {
          return (
            <Col lg={3} md={6} sm={6} xs={12} key={data.key}>
              <FollowerCard data={data} darkMode={props.darkMode} />
            </Col>
          )
        })
      }
    </Row>
  )
}

export default FollowerContainer;