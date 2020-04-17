import React from 'react';
import { css } from 'emotion';
import PageLikes from './PageLikes';
import Card from './Card';

function OverviewCard(props) {
  return (
    <Card darkMode={props.darkMode}>
      <PageLikes />
    </Card>
  )
}   

export default OverviewCard;