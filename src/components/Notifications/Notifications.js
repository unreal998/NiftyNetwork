import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import photoIcon from '../../icons/photoIcon.png';
import photoIconLar from '../../icons/photoIconLar.jpg';
import Nnift from './notificationNift';
import photoIcon2 from '../../icons/photoIcon2.png';
import photoIcon3 from '../../icons/photoIcon3.png';
import photoIconLar2 from '../../icons/photoIcon2Lar.png';
import photoIconLar3 from '../../icons/photoIcon3Lar.png';
import photoSmall from '../../icons/photoSmall.jpg';
import photo from '../../icons/photo.png';
import 'normalize.css';
import './Notification.scss';
import Siders from '../Sider/Sider';
import Header from '../Header/Header';

class Notifications extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date().toDateString(),
    };
  }

  render() {
    const styleBody = {
      backgroundColor: this.props.colorBody,
    };
    const styleNift = {
      backgroundColor: this.props.colorNift,
    };

    return (
      <Fragment>
        <Siders/>
        <div className= "contentPage" style={styleBody}>
        <Header/>
      <div className="notificationContainer">
      <Nnift niftStyle={styleNift} likes = "844" repost = "400" name="Unreal" date= {this.state.date} smallIcon={photoIcon} largeIcon = {photoIconLar} />
      <Nnift niftStyle={styleNift} likes = "30" repost = "4" name="Telegram" date= {this.state.date} smallIcon={photoIcon2} largeIcon = {photoIconLar2} />
      <Nnift niftStyle={styleNift} likes = "43" repost = "1" name="VK" date= {this.state.date} smallIcon={photoIcon3} largeIcon = {photoIconLar3} />
      <Nnift niftStyle={styleNift} likes = "94" repost = "18" name="Random Name" date= {this.state.date} smallIcon={photoSmall} largeIcon = {photo} />
      <Nnift niftStyle={styleNift} likes = "23" repost = "0" name="Rozetka" date= {this.state.date} smallIcon={photoSmall} text = "#FIRSTNIFT" />
      <Nnift niftStyle={styleNift} likes = "53" repost = "11" name="Twitter" date= {this.state.date} smallIcon={photoSmall} text = "#FIRSTNIFT" />
      <Nnift niftStyle={styleNift} likes = "69" repost = "96" name="Facebook" date= {this.state.date} smallIcon={photoSmall} text = "#FIRSTNIFT" />
      <Nnift niftStyle={styleNift} likes = "66" repost = "6" name="First and Second name" date= {this.state.date} smallIcon={photoSmall} text = "#FIRSTNIFT" />
      </div>
      </div>
        <Siders/>
        </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  colorBody: state.colorReducer.colorBody,
  colorNift: state.colorReducer.colorNift,
});

Notifications.propTypes = {
  colorBody: PropTypes.string,
  colorNift: PropTypes.string,
};

export default connect(mapStateToProps)(Notifications);
