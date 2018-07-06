import React, { Component } from 'react';
import photoIcon from '../../icons/photoIcon.png';
import photoIconLar from '../../icons/photoIconLar.jpg';
import Nnift from './notificationNift';
import photoIcon2 from '../../icons/photoIcon2.png';
import photoIcon3 from '../../icons/photoIcon3.png';
import photoIconLar2 from '../../icons/photoIcon2Lar.png';
import photoIconLar3 from '../../icons/photoIcon3Lar.png';
import photoSmall from '../../icons/photoSmall.jpg';
import photo from '../../icons/photo.png';

import './Notification.scss';

class Notifications extends Component {
  render() {
    console.log(this);
    const date = new Date().toDateString();
    console.log(date);
    return (
      <div className="notificationContainer">
      <Nnift likes = "844" repost = "400" name="Unreal" date= {date} smallIcon={photoIcon} largeIcon = {photoIconLar} />
      <Nnift likes = "30" repost = "4" name="Telegram" date= {date} smallIcon={photoIcon2} largeIcon = {photoIconLar2} />
      <Nnift likes = "43" repost = "1" name="VK" date= {date} smallIcon={photoIcon3} largeIcon = {photoIconLar3} />
      <Nnift likes = "94" repost = "18" name="Random Name" date= {date} smallIcon={photoSmall} largeIcon = {photo} />
      <Nnift likes = "23" repost = "0" name="Rozetka" date= {date} smallIcon={photoSmall} text = "#FIRSTNIFT" />
      <Nnift likes = "53" repost = "11" name="Twitter" date= {date} smallIcon={photoSmall} text = "#FIRSTNIFT" />
      <Nnift likes = "69" repost = "96" name="Facebook" date= {date} smallIcon={photoSmall} text = "#FIRSTNIFT" />
      <Nnift likes = "66" repost = "6" name="First and Second name" date= {date} smallIcon={photoSmall} text = "#FIRSTNIFT" />
      </div>
    );
  }
}

export default Notifications;
