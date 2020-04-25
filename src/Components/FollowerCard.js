import React from 'react';
import IconLockUp from './IconLockUp';
import FollowerLockUp from './FollowerLockUp';
import { FollowersDelta } from './Delta';
import Card from './Card';
import { css } from 'emotion';

function FollowerCard(props) {

  return (
    <Card border={true} data={props.data} darkMode={props.darkMode}>
      <IconLockUp data={props.data} />
      <FollowerLockUp data={props.data} />
      <FollowersDelta data={props.data} font_size="14px"/>
    </Card>
  )
}

export default FollowerCard;