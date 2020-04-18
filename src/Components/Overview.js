import React from 'react';
import { css } from 'emotion';

function Overview() {
  return (
    <div className={css`
      letter-spacing: 2px;
      align-self: center;
      font-weight: 700;
      margin-top: 2rem;
      color: var(--dark-theme-sec-txt);
    `}>
      <h2>Overview - Today</h2>
    </div>
  )
}   

export default Overview;