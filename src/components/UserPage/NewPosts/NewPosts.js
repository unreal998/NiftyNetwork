import React, { Component } from 'react';

import './NewPosts.scss';

import NotyPrevItem from '../../NotyPrevItem/NotyPrevItem';

import iconAlternative from '../../../icons/photoIcon3.png';
/* eslint-disable */
class NewPosts extends Component {
  /* eslint-enabled */
  render() {
    return (
    <div className="newPostInfo">
      <h1 className="headlineText">New posts</h1>
      <div className="newPostsList">
        <NotyPrevItem name="Rozetka" icon={iconAlternative} data="5 minutes ago"/>
        <NotyPrevItem name="Rozetka" icon={iconAlternative} data="5 minutes ago"/>
        <NotyPrevItem name="Rozetka" icon={iconAlternative} data="5 minutes ago"/>
        <NotyPrevItem name="Rozetka" icon={iconAlternative} data="5 minutes ago"/>
        <NotyPrevItem name="Rozetka" icon={iconAlternative} data="5 minutes ago"/>
      </div>
      <button className="toggler">🠷 view more 🠷</button>
    </div>);
  }
}

export default NewPosts;
