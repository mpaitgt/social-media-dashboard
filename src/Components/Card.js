import React from 'react';
import { css } from 'emotion';

function Card(props) {

  const border = () => {
    switch(props.data.channel) {
      case 'Facebook':
        return 'var(--facebook)';
      case 'Twitter':
        return 'var(--twitter)';
      case 'YouTube':
        return 'var(--youtube)';
      case 'Instagram':
        return 'var(--instagram-border)';
      default:
        return 'var(--facebook)';
    }
  }

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
      border-top: ${props.border ? `5px solid ${border()}` : null};
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