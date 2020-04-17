import React from 'react';
import { css } from 'emotion';

function Toggle(props) {
  return (
    <div className={css`
      width: 80px;
      height: 34px;
      background: var(--dark-theme-btn);
      border-radius: 50px;
      border: 2px solid var(--dark-theme-btn);
    `} onClick={props.toggleView}>
      <div className={css`
        width: 50%;
        height: 100%;
        background: var(--dark-theme-bg);
        border-radius: 50px;
      `}></div>  
    </div>
  )
}

export default Toggle;