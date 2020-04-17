import React from 'react';
import { css } from 'emotion';

function FollowerCard() {
  return (
    <div className={css`
      background: var(--dark-theme-card-bg);
      width: 100%;
      height: 250px;
      border-radius: 10px;
    `}>
      1987 followers
    </div>
  )
}

export default FollowerCard;