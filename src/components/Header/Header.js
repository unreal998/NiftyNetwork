import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import photoMin from '../../icons/photo-min.png';
import homeIcon from '../../icons/home.png';
import msgIcon from '../../icons/message.png';
import notifyIcon from '../../icons/notification.png';
import settings from '../../icons/fix.png';


function Header() {
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
            <span className="userProfileName">Dolor</span>
            <button className="appBtn"><img src={settings} alt="" /></button>
        </div>
    </header>
  );
}

export default Header;
