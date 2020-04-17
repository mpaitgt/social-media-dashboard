import React from 'react';
import { css } from 'emotion';
import IconLockUp from './IconLockUp';
import FollowerLockUp from './FollowerLockUp';
import Delta from './Delta';

function FollowerCard() {
  return (
    <div className={css`
      background: var(--dark-theme-card-bg);
      width: 100%;
      height: 250px;
      border-radius: 10px;
      padding: 10px 0px;
      display: flex;
      flex-direction: column;
      align-item: center;
      justify-content: space-around;
    `}>
      <IconLockUp />
      <FollowerLockUp />
      <Delta />
    </div>
  )
}

export default FollowerCard;