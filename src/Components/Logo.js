import React from 'react';
import InstagramIcon from '../images/icon-instagram.svg';
import FacebookIcon from '../images/icon-facebook.svg';
import YouTubeIcon from '../images/icon-youtube.svg';
import TwitterIcon from '../images/icon-twitter.svg';

function Logo(props) {

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
    <img src={iconDisplay()} alt="Social Icon" width="30" />
  )
}   

export default Logo;