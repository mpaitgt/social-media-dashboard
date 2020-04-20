import React from 'react';
import { css } from 'emotion';

function Card(props) {

  return (
    <div className={css`
      background: ${props.darkMode ? 'var(--dark-theme-card-bg)' : 'var(--light-theme-card-bg)'};
      // height: 120px;
      margin-top: 1rem;
      margin-bottom: 1rem;
      border-radius: 5px;
      padding: 22px 32px;
      display: flex;
      flex-direction: column;
      align-item: center;
      justify-content: space-around;
      position: relative;
      &:hover {
        cursor: pointer;
        background: ${props.darkMode ? 'var(--dark-theme-card-bg-hover)' : 'var(--light-theme-card-bg-hover)'};
      }
    `}>
      { props.children }
    </div>
  )
}   

export default Card;