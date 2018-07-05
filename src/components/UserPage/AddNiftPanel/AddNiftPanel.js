import React from 'react';

import './AddNiftPanel.scss';

import photoMin from '../../../icons/photo-min.png';

function AddNiftPanel() {
  return (
  <div className="addNiftPanel">
    <img src={photoMin} alt="" className="userMinIcon"/>
    <input type="text" id="niftItput" name="niftText" placeholder="Write you nift ..."/>
    </div>
  );
}

export default AddNiftPanel;
