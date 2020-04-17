import React from 'react';
import { css } from 'emotion';
import PageLikes from './PageLikes';

function OverviewCard() {
  return (

    <div className={css`
      background: var(--dark-theme-card-bg);
      width: 100%;
      height: 120px;
      margin-top: 1rem;
      margin-bottom: 1rem;
      border-radius: 10px;
      padding: 10px 0px;
      display: flex;
      flex-direction: column;
      align-item: center;
      justify-content: space-around;
    `}>
      <PageLikes />
    </div>
  )
}   

export default OverviewCard;