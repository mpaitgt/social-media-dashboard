import React from 'react';
import { Row, Col } from 'react-grid-system';
import OverviewCard from './OverviewCard';
import Data from '../Utils/data.json';

function OverviewContainer(props) {

  const reOrganize = () => {
    let data = Data['social_media'];
    let key = Math.random() * 20;
    return data.reduce((acc, currentItem, index, array) => {
      const { channel, likes, page_views, retweets } = currentItem;
      if (retweets) acc.push({ 'type': 'Retweets', 'value': retweets, 'channel': channel, 'key': key++ });
      if (likes) acc.push({ 'type': 'Likes', 'value': likes, 'channel': channel, 'key': key++ });
      if (page_views) acc.push({ 'type': 'Page Views', 'value': page_views, 'channel': channel, 'key': key++ });
      return acc;
    }, []);
  }

  return (
    <Row >
      {
        reOrganize().map(data => {
          return (
            <Col lg={3} md={6} sm={6} xs={12} key={data.key}>
              <OverviewCard data={data} darkMode={props.darkMode} />
            </Col>
          )
        })
      }
    </Row>
  )
}   

export default OverviewContainer;