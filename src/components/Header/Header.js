import React, { Component } from 'react';
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
import {
  ChangeColorHeader, ChangeColorBody, ChangeColorNift, ChangeColorText,
} from '../../actions/changeColor';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
    this.OpenTab = this.OpenTab.bind(this);
  }
  
  OpenTab() {
    this.setState(prevState => ({
      display: !prevState.display,
    }));
  }

  render() {
    const name = this.props.userName.substr(0, this.props.userName.indexOf(' '));
    console.log(this.props.uid);
    const settingsDisplaed = {
      display: 'none',
    };
    if (this.state.display) {
      settingsDisplaed.display = 'flex';
    }
    const headerColor = {
      backgroundColor: this.props.colorHeader,
    };
    return (
    <header className="header" style={ headerColor }>
        <nav className="navbar">
            <ul className="nav">
                <li className="navItem">
                  <Link
                    className="navLink"
                    to={`/home/${this.props.uid}`}
                  >
                  <img src={homeIcon} alt="" className="itemImg" />
                  Home
                  </Link>
                </li>
                <li className="navItem">
                  <Link
                    className="navLink"
                    to={`/notifycation/${this.props.uid}`}
                  >
                  <img src={notifyIcon} alt="" className="itemImg" />
                  Notifycation</Link>
                </li>
                <li className="navItem">
                    
                  <Link
                    className="navLink"
                    to={`/messages/${this.props.uid}`}
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
            <div className="settingsApp">
              <button className="appBtn"><img src={settings} onClick={ this.OpenTab } alt="" /></button>
              <div className= "setingsContainer" style={settingsDisplaed} >
              <div className= "colorSheme">
                Head Color <input type="color" id="head" value={this.props.colorHeader} onChange={event => this.props.ChangeColorHeader(event.target.value)}/>
                Body Color<input type="color" id="body" value={this.props.colorBody} onChange={event => this.props.ChangeColorBody(event.target.value)}/>
                Text Color<input type="color" id="text" value={this.props.colorText} onChange={event => this.props.ChangeColorText(event.target.value)}/>
                Nift Color<input type="color" id="nifts"value={this.props.colorNift} onChange={event => this.props.ChangeColorNift(event.target.value)}/>
              </div>
              <h3>Sign Out</h3>
            </div>
            </div>
        </div>
    </header>
    );
  }
}

const mapStateToProps = state => ({
  colorHeader: state.colorReducer.colorHeader,
  colorBody: state.colorReducer.colorBody,
  colorNift: state.colorReducer.colorNift,
  colorText: state.colorReducer.colorText,
  userName: state.currentUser.displayName,
  uid: state.currentUser.uid,
});


const mapDispatchToProps = dispatch => ({
  ChangeColorHeader: (newColorHeader) => {
    dispatch(ChangeColorHeader(newColorHeader));
  },
  ChangeColorBody: (newColorBody) => {
    dispatch(ChangeColorBody(newColorBody));
  },
  ChangeColorNift: (newColorNift) => {
    dispatch(ChangeColorNift(newColorNift));
  },
  ChangeColorText: (newColorText) => {
    dispatch(ChangeColorText(newColorText));
  },
});

Header.propTypes = {
  colorHeader: PropTypes.string,
  colorBody: PropTypes.string,
  colorNift: PropTypes.string,
  colorText: PropTypes.string,
  ChangeColorHeader: PropTypes.func,
  ChangeColorBody: PropTypes.func,
  ChangeColorNift: PropTypes.func,
  ChangeColorText: PropTypes.func,
  userName: PropTypes.string,
  uid: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
