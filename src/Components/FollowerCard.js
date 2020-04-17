import React from 'react';
import IconLockUp from './IconLockUp';
import FollowerLockUp from './FollowerLockUp';
import Delta from './Delta';
import Card from './Card';
import InstagramIcon from '../images/icon-instagram.svg';
import FacebookIcon from '../images/icon-facebook.svg';
import YouTubeIcon from '../images/icon-youtube.svg';
import TwitterIcon from '../images/icon-twitter.svg';

function FollowerCard(props) {

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
      <IconLockUp icon={iconDisplay()} />
      <FollowerLockUp data={props.data} />
      <Delta data={props.data} font_size="14px"/>
    </Card>
  )
}

export default FollowerCard;