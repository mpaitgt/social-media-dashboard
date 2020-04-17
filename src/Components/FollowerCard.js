import React from 'react';
import { css } from 'emotion';
import IconLockUp from './IconLockUp';
import FollowerLockUp from './FollowerLockUp';
import Delta from './Delta';
import Card from './Card';

function FollowerCard(props) {
  return (
    <Card darkMode={props.darkMode}>
      <IconLockUp />
      <FollowerLockUp />
      <Delta font_size="14px"/>
    </Card>
  )
}

export default FollowerCard;