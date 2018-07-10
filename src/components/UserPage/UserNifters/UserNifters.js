import React, { Component } from 'react';

import './UserNifters.scss';

import NotyPrevItem from '../../NotyPrevItem/NotyPrevItem';

import iconAlternative from '../../../icons/photoIcon3.png';
import iconMain from '../../../icons/photoIcon.png';
import iconSecondary from '../../../icons/photoIcon2.png';
/* eslint-disable */
class UserNifters extends Component {
  /* eslint-enabled */
  render() {
    return (
    <div className="userNifters">
      <h1 className="headlineText">Nifters</h1>
      <div className="niftersList">
        <NotyPrevItem name="Lorem Ipsum" icon={iconAlternative} data="Famale, 19 year"/>
        <NotyPrevItem name="Facebook" icon={iconMain} data="social network"/>
        <NotyPrevItem name="Rozetka" icon={iconSecondary} data="web-store"/>
        <NotyPrevItem name="Lorem Ipsum" icon={iconAlternative} data="Famale, 19 year"/>
        <NotyPrevItem name="Facebook" icon={iconMain} data="social network"/>
        <NotyPrevItem name="Rozetka" icon={iconSecondary} data="web-store"/>
        <NotyPrevItem name="Lorem Ipsum" icon={iconAlternative} data="Famale, 19 year"/>
        <NotyPrevItem name="Facebook" icon={iconMain} data="social network"/>
        <NotyPrevItem name="Rozetka" icon={iconSecondary} data="web-store"/>
      </div>
      <button className="toggler">🠷 view more 🠷</button>
    </div>);
  }
}

export default UserNifters;
