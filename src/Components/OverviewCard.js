import React from 'react';
import { css } from 'emotion';
import PageLikes from './PageLikes';
import Card from './Card';
import InstagramIcon from '../images/icon-instagram.svg';
import FacebookIcon from '../images/icon-facebook.svg';
import YouTubeIcon from '../images/icon-youtube.svg';
import TwitterIcon from '../images/icon-twitter.svg';
import Delta from './Delta';

function OverviewCard(props) {

  const iconDisplay = () => {
    switch(props.data.channel) {
      case 'Facebook':
        return FacebookIcon;
      case 'Twitter':
        return TwitterIcon;
      case 'YouTube':
        return YouTubeIcon;
      case 'Instagram':
        return InstagramIcon;
      default:
        return FacebookIcon;
    }
  }

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
        <img src={iconDisplay()} alt="instagram icon"></img>
        <div className={css`font-size: 38px;`}>{props.data.likes}</div>
        <Delta font_size="10px"/>
      </div>
    </Card>
  )
}   

export default OverviewCard;