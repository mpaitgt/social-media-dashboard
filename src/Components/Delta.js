import React from 'react';
import { css } from 'emotion';
import IconUp from '../images/icon-up.svg';
import IconDown from '../images/icon-down.svg';

function Delta(props) {
  console.log(props.data);

  const change = () => {
    return (
      props.data.followers_change > 0 || props.data.subscribers_change > 0
      ?
      <div className={css`color: var(--lime-green);`}>
        <img src={IconUp} alt="up arrow"/>
        <span>{props.data.followers_change || props.data.subscribers_change} Today</span>
      </div>
      :
      <div className={css`color: var(--bright-red);`}>
        <img src={IconDown} alt="down arrow"/>
        <span>{Math.abs(props.data.followers_change || props.data.subscribers_change)} Today</span>
      </div>
      
    )
  }

  return (
    <div className={css`
      letter-spacing: 2px;
      align-self: center;
      font-weight: 700;
      font-size: ${props.font_size}
    `}>
    {change()}
    </div>
  )
}   

export default Delta;