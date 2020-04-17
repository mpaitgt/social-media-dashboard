import React from 'react';
import { css } from 'emotion';
import Card from './Card';
import Logo from './Logo';
import { PercentageDelta } from './Delta';

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
        <h4 className={css`color: var(--dark-theme-sec-txt);`}>{props.data.type}</h4>
        <Logo data={props.data} />
        <div className={css`font-size: 38px; letter-spacing: -2px;`}>{props.data.value}</div>
        <PercentageDelta data={props.data} font_size="14px"/>
      </div>
    </Card>
  )
}   

export default OverviewCard;