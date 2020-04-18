import React from 'react';
import { css } from 'emotion';

function Toggle(props) {
  return (
    <div className={css`display: flex; flex-direction: row; align-items: center;`}>
      <span className={css`
        padding: 10px; 
        color: ${props.darkMode ? 'var(--dark-theme-txt)' : 'var(--dark-theme-sec-txt)'};
      `}>Dark Mode</span>
      <div className={css`
        display: flex;
        justify-content: ${props.darkMode ? 'flex-start' : 'flex-end'};
        width: 60px;
        height: 32px;
        background: ${props.darkMode ? 'var(--dark-theme-btn)' : 'var(--light-theme-btn)'};
        border-radius: 50px;
      `} onClick={props.toggleView}>
      <div className={css`
        width: 28px;
        height: 28px;
        margin-left: 2px;
        margin-right: 2px;
        background: var(--dark-theme-bg);
        border-radius: 50px;
        align-self: center;
      `}></div>  
    </div>
    </div>
  )
}

export default Toggle;