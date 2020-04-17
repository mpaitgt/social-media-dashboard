import React from 'react';
import { Row, Col } from 'react-grid-system';
import OverviewCard from './OverviewCard';
import Data from '../Utils/data.json';

function OverviewContainer(props) {

  const reOrganize = () => {
    let data = Data['social_media'];
    return data.reduce((acc, currentItem, index, array) => {
      const { channel, likes, page_views, retweets } = currentItem;
      console.log(array[index])
      if (retweets) acc.push({ 'type': 'Retweets', 'value': retweets, 'channel': channel });
      if (likes) acc.push({ 'type': 'Likes', 'value': likes, 'channel': channel });
      if (page_views) acc.push({ 'type': 'Page Views', 'value': page_views, 'channel': channel });
      return acc;
    }, []);
  }

  console.log(reOrganize());

  return (
    <Row>
      {
        reOrganize().map(data => {
          return (
            <Col md={3} key={data.key}>
              <OverviewCard data={data} darkMode={props.darkMode} />
            </Col>
          )
        })
      }
    </Row>
  )
}   

export default OverviewContainer;