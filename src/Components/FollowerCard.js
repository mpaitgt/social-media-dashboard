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
      height: 200px;
      border-radius: 5px;
      padding: 10px 0px;
      display: flex;
      flex-direction: column;
      align-item: center;
      justify-content: space-around;
      border-top: 5px solid var(--instagram) !important;
    `}>
      <IconLockUp />
      <FollowerLockUp />
      <Delta font_size="14px"/>
    </div>
  )
}

export default FollowerCard;