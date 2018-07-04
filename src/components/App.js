import React, { Fragment } from 'react';

import 'normalize.css';
import Header from './Header/Header';
import Sider from './Sider/Sider';
import UserPage from './UserPage/UserPage';

const App = () => (
    <Fragment>
        <Sider/>
        <div className="page">
            <Header/>
            <UserPage/>
        </div>
        <Sider/>
    </Fragment>
);

export default App;
