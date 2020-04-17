import React from 'react';
import { css } from 'emotion';
import Logo from './Logo';

function FollowerContainer(props) {
  return (
    <div className={css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `}>
      <Logo data={props.data} />
      <p className={css`margin-left: 10px;`}>@matt_blah</p>
    </div>
  )
}

export default FollowerContainer;