import React from 'react';
import { css } from 'emotion';
import Toggle from './Toggle';


function Header(props) {
  return (
    <div className={css`
      display: flex; 
      flex-direction: row; 
      align-items: center; 
      justify-content: space-between;
      padding-top: 3rem;
      padding-bottom: 3rem;
    `}> 
      <div>
      <h1 className={css`
        color: var(--dark-theme-txt);
        font-weight: 900;
      `}>Social Media Dashboard</h1>
      <h4 className={css`
        color: var(--dark-theme-sec-txt);
      `}>Total Followers: 23,004</h4>
      </div>
      <Toggle toggleView={props.toggleView}/>
    </div>
  )
}

export default Header;