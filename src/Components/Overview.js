import React from 'react';
import { css } from 'emotion';
import IconUp from '../images/icon-up.svg';
import IconDown from '../images/icon-down.svg';

function Overview() {
  return (
    <div className={css`
      letter-spacing: 2px;
      align-self: center;
      font-weight: 700;
      margin-top: 2rem;
      margin-bottom: 2rem;
    `}>
      <h2>Overview - Today</h2>
    </div>
  )
}   

export default Overview;