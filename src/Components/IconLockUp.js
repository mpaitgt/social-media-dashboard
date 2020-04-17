import React from 'react';
import { Row, Col } from 'react-grid-system';
import { css } from 'emotion';
import FollowerCard from './FollowerCard';
import FacebookIcon from '../images/icon-facebook.svg';

function FollowerContainer(props) {
  return (
    <div className={css`
      display: flex;
      flex-direction: row;
      justify-content: center;
    `}>
      <img className={css`
        color: var(--facebook);
      `} src={props.icon} alt="Facebook Icon" width="30"></img>
      <p className={css`
        margin-left: 10px;
      `}>@matt_blah</p>
    </div>
  )
}

export default FollowerContainer;