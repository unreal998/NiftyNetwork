import React, { Fragment } from 'react';

import 'normalize.css';
import Header from './Header/Header';
import Sider from './Sider/Sider';

import MessagesWindow from './MessagesWindow/MessagesWindow';

const App = () => (
    <Fragment>
        <Sider/>
        <div className="page">
            <Header/>
            <MessagesWindow/>
        </div>
        <Sider/>
    </Fragment>
);

export default App;
