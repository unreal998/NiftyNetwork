import React from 'react';
import PropTypes from 'prop-types';

import './Nift.scss';

import like from '../../../icons/like.svg';
import repost from '../../../icons/repost.svg';

function Nift(props) {
  return (
    <div className="nift">
      <img src={props.icon} alt="" className="userMinIcon"/>
      <div className="niftContent">
        <div className="niftText">{props.text}</div>
        <div className="niftImgs">
        {props.imgs.map(img => <img src={img} key={1}/>)}
        </div>
      </div>
        <div className="niftSideBar">
          <div className="niftTime">{props.date}</div>
          <div className="niftRepost">
            <button className="niftSideBtn  appBtn"><img src={repost} alt="" /></button><span className="repostCount niftStat">1</span>
          </div>
          <div className="niftLike">
            <button className="niftSideBtn appBtn"><img src={like} alt="" /></button><span className="likeCount niftStat">15</span>
          </div>
        </div>
    </div>
  );
}

Nift.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string.isRequired,
  date: PropTypes.string,
  imgs: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};
Nift.defaultProps = {
  imgs: [],
};

export default Nift;
