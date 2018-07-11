import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.scss';
// import { stat } from 'fs';
import photoMin from '../../icons/photo-min.png';
import homeIcon from '../../icons/home.png';
import msgIcon from '../../icons/message.png';
import notifyIcon from '../../icons/notification.png';
import settings from '../../icons/fix.png';


function Header(props) {
  const name = props.userName.substr(0, props.userName.indexOf(' '));
  return (
    <header className="header">
        <nav className="navbar">
            <ul className="nav">
                <li className="navItem">
                  <Link
                    className="navLink"
                    to='/home'
                  >
                  <img src={homeIcon} alt="" className="itemImg" />
                  Home
                  </Link>
                </li>
                <li className="navItem">
                    
                  <Link
                    className="navLink"
                    to='/notifycation'
                  >
                  <img src={notifyIcon} alt="" className="itemImg" />
                  Notifycation</Link>
                </li>
                <li className="navItem">
                    
                  <Link
                    className="navLink"
                    to='/messages'
                  >
                  <img src={msgIcon} alt="" className="itemImg" />
                  Messages
                  </Link>
                </li>
            </ul>
        </nav>
        <div className="settings">
            <img src={photoMin} alt="" className="userIconMini" />
            <span className="userProfileName">{name}</span>
            <button className="appBtn"><img src={settings} alt="" /></button>
        </div>
    </header>
  );
}

Header.propTypes = {
  userName: PropTypes.string,
};

const mapStateToProps = state => ({
  userName: state.currentUser.displayName,
});

export default connect(mapStateToProps)(Header);
