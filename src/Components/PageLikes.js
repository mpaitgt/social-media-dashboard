import React from 'react';
import { css } from 'emotion';
import InstagramIcon from '../images/icon-instagram.svg';
import Delta from './Delta';

function PageLikes() {
  return (
    <div className={css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      align-self; center;
    `}>
      <h4>Page Views</h4>
      <img src={InstagramIcon} alt="instagram icon"></img>
      <div className={css`font-size: 38px;`}>34</div>
      <Delta font_size="10px"/>
    </div>
  )
}

export default PageLikes;