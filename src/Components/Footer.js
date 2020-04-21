import React from 'react';
import { css } from 'emotion';

function Footer() {
  return (
    <div className={css`
      font-size: 11px; 
      text-align: center;
      margin: 4rem 0rem;
    `}>
      Challenge by <a className={css`color: hsl(228, 45%, 44%);`} href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a className={css`color: hsl(228, 45%, 44%);`} href="http://www.mattpignatore.com">Matt Pignatore</a>.
    </div>
  )
}  

export default Footer;