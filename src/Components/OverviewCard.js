import React from 'react';
import { css } from 'emotion';
import Card from './Card';
import Logo from './Logo';
import { PercentageDelta } from './Delta';
import helpers from '../Utils/helpers';

function OverviewCard(props) {

  return (
    <Card data={props.data} darkMode={props.darkMode}>
      <div className={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
      `}>
        <div className={css`
          display: flex; 
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
        `}>
          <h4 className={css`
            color: var(--dark-theme-sec-txt);
            padding-bottom: 20px;
          `}>
            {props.data.type}
          </h4>
          <span className={css`
            font-size: 38px; 
            letter-spacing: -2px;
          `}>
            {helpers.addTheK(props.data.value)}
          </span>
        </div>
        <div className={css`
          display: flex; 
          flex-direction: column; 
          align-items: flex-end;  
          justify-content: space-between;
        `}>
          <Logo data={props.data} />
          <PercentageDelta data={props.data} font_size="14px" />
        </div>
      </div>
    </Card>
  )
}   

export default OverviewCard;