import React from 'react';
import { css } from 'emotion';

function FollowerLockUp(props) {

  return (
    <div className={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;
      margin-bottom: 2rem;
    `}>
      <div className={css`
        font-size: 62px;
        letter-spacing: -4px;
      `}>{props.data.followers || props.data.subscribers}</div>
      <div className={css`
        text-transform: uppercase;
        letter-spacing: 3px;
        color: var(--dark-theme-sec-txt);
      `}>
        {props.data.followers ? 'Followers' : 'Subscribers'}
      </div>
    </div>
  )
}

export default FollowerLockUp;