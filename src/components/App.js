import React, { Fragment } from 'react';

import 'normalize.css';
import Header from './Header/Header';
import Sider from './Sider/Sider';

const App = () => (
    <Fragment>
        <Sider/>
        <div className="page">
            <Header/>
        </div>
        <Sider/>
    </Fragment>
);

export default App;
