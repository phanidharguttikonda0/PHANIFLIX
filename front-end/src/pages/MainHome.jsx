import React from 'react';
import { Outlet } from 'react-router-dom';
import css from './MainHome.module.css';
import Nav from './Nav';

function MainHome(props) {
    return ( 
        <div className={css.home}>
            <div className={css.nav}>
                <Nav />
            </div>
            <div className={css.content}>
                <Outlet />
            </div>
        </div>
    );
}

export default MainHome;