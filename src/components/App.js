import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import 'normalize.css';
import Header from './Header/Header';
import Sider from './Sider/Sider';

import MessagesWindow from '../containers/MessagesWindow';

import FakeHome from './FakeHome';
import FakeNotify from './FakeNotify';

class App extends React.Component {

  render() {
    const { filter } = this.props.match.params;
    let RenderComponent;

    switch (filter) {
      case 'home':
        RenderComponent = FakeHome;
        break;
      case 'messages':
        RenderComponent = MessagesWindow;
        break;
      case 'notifycation':
        RenderComponent = FakeNotify;
        break;
      default:
        RenderComponent = FakeHome;
    }

    return (
      <Fragment>
        <Sider/>
        <div className="page">
          <Header/>
          <RenderComponent/>
        </div>
        <Sider/>
      </Fragment>
    )
  }
}

App.propTypes = {
  match: PropTypes.object,
};

export default App;
