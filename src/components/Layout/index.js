import './index.scss';
import { Outlet } from 'react-router-dom';

import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import Sidebar from '../sidebar';



const Layout = () => {
    return (
    <div className="App">
        <Sidebar />

        {/* <h1>enter the web dev</h1> */}

        {/* <NavLink className="nav-link" exact="true" activeClassName="active" to="/home">
            <p className="name"><span className="home">Enter</span></p>
        </NavLink> */}

        <div className="page">
            <Outlet />
            



        </div>




    </div>
    )
};

export default Layout;