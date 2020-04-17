import React from 'react';
import { css } from 'emotion';

function FollowerContainer(props) {
  return (
    <div className={css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      // margin-top: 0.5rem;
      // margin-bottom: 1rem;
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