import React from 'react';
import IconLockUp from './IconLockUp';
import FollowerLockUp from './FollowerLockUp';
import Delta from './Delta';
import Card from './Card';

function FollowerCard(props) {

  return (
    <Card darkMode={props.darkMode}>
      <IconLockUp data={props.data} />
      <FollowerLockUp data={props.data} />
      <Delta data={props.data} font_size="14px"/>
    </Card>
  )
}

export default FollowerCard;