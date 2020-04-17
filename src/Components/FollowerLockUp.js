import React from 'react';
import { css } from 'emotion';

function FollowerLockUp() {
  return (
    <div className={css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}>
      <div className={css`
        font-size: 72px;
        letter-spacing: -4px;
      `}>1122</div>
      <div className={css`
        text-transform: uppercase;
        letter-spacing: 3px;
        color: var(--dark-theme-sec-txt);
      `}>
        Followers
      </div>
    </div>
  )
}

export default FollowerLockUp;