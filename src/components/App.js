import React, { Fragment } from 'react';

import 'normalize.css';
import Header from './Header/Header';
import Sider from './Sider/Sider';
import Notifications from './Notifications/Notifications';

const App = () => (
    <Fragment>
        <Sider/>
        <div className="page">
            <Header/>
            <Notifications/>
        </div>
        <Sider/>
        
    </Fragment>

);

export default App;
