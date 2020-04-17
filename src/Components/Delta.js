import React from 'react';
import { css } from 'emotion';
import IconUp from '../images/icon-up.svg';
import IconDown from '../images/icon-down.svg';

function Delta(props) {
  return (
    <div className={css`
      color: var(--lime-green);
      letter-spacing: 2px;
      align-self: center;
      font-weight: 700;
      font-size: ${props.font_size}
    `}>
      <img src={IconUp} alt="up arrow" width="15"/>
      23 Today
    </div>
  )
}   

export default Delta;