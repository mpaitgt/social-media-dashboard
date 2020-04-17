import React from 'react';
import { css } from 'emotion';
import Card from './Card';
import Logo from './Logo';
import Delta from './Delta';

function OverviewCard(props) {

  return (
    <Card darkMode={props.darkMode}>
      <div className={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
        align-self; center;
      `}>
        <h4>Likes</h4>
        <Logo data={props.data} />
        <div className={css`font-size: 38px;`}>{props.data.likes}</div>
        <Delta data={props.data} font_size="10px"/>
      </div>
    </Card>
  )
}   

export default OverviewCard;