import React from 'react';
import PropTypes from 'prop-types';

import './NotyPrevItem.scss';

function NotyPrevItem(props) {
  return (
    <div className="prevNotyItem">
      <div className="authorIcon">
      <img src={props.icon} alt=""/>
      </div>
      <div className="notyInfo">
        <div className="authorUserName">{props.name}</div>
        <div className="notifyAddingInfo">{props.data}</div>
      </div>
    </div>
  );
}

NotyPrevItem.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  data: PropTypes.string,
};

export default NotyPrevItem;
