import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo/UserInfo';
import NewPosts from './NewPosts/NewPosts';
import AddNiftPanel from './AddNiftPanel/AddNiftPanel';
import Nift from './Nift/Nift';
import UserNifters from './UserNifters/UserNifters';
import photoMin from '../../icons/photo-min.png';
import photo from '../../icons/photo.png';
import 'normalize.css';
import './UserPage.scss';
import Siders from '../Sider/Sider';
import Header from '../Header/Header';


class UserPage extends Component {

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
        <div className="content">
          <div className="infoBlock">
              <UserInfo userName="Maks" userAge={19} userGender="male" userPhone={88005553535} />
              <NewPosts/>
          </div>
          <main className="userNifts">
            <AddNiftPanel/>
            <div className="niftsList">
             <Nift niftStyle = {styleNift} icon={photoMin} date={'21.07.18'} text ={'loremafssssssssssssssssss lorem fbhah dadasd as dasd as ddsa jkajs dddddddd af  af a fsa  ' } />
             <Nift niftStyle = {styleNift} icon={photoMin} date={'21.07.18'} imgs={[photo]} />
            </div>
            <div/>
          </main>
            <aside className="sideBar">
              <UserNifters/>
            </aside>
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

UserPage.propTypes = {
  colorBody: PropTypes.string,
  colorNift: PropTypes.string,
};

export default connect(mapStateToProps)(UserPage);
