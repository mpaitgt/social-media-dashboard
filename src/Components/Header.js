import React from 'react';
import { css } from 'emotion';
import Toggle from './Toggle';
import Data from '../Utils/data.json';

function Header(props) {
  const data = Data['social_media'];
  const totalFollowers = () => {
    return data.reduce((acc, current) => {
      let { followers, subscribers } = current;
      if (followers) acc += followers;
      if (subscribers) acc += subscribers;
      return acc;
    }, 0)
  }

  return (
    <div className={css`
      display: flex; 
      flex-direction: row; 
      align-items: center; 
      justify-content: space-between;
      padding-top: 2rem;
      padding-bottom: 1rem;
    `}> 
      <div>
        <h1 className={css`
          color: var(--dark-theme-txt);
          font-weight: 900;
          padding: 20px 0px;
        `}>Social Media Dashboard</h1>
        <h4 className={css`
          color: var(--dark-theme-sec-txt);
        `}>Total Followers: {totalFollowers()}</h4>
      </div>
      <Toggle darkMode={props.darkMode} toggleView={props.toggleView}/>
    </div>
  )
}

export default Header;