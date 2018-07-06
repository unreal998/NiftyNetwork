import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import someonePhoto from '../../../../icons/photo-min.png';
import myPhoto from '../../../../icons/userPhoto.png';

import './Message.scss';

const Message = props => (
    <Fragment>
        <div className={`message ${props.ownerMessage}`}>
          <div className='messageHeader'>
            <img src={props.ownerMessage === 'myMessage' ? myPhoto : someonePhoto } alt='userPhoto'/>
            <span>User Name Surname</span>
          </div>
          <div className='messageBody'>
            Message
          </div>
        </div>
    </Fragment>
);

Message.propTypes = {
  ownerMessage: PropTypes.string,
};

export default Message;
