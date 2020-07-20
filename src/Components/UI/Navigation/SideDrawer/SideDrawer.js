import React from 'react';

import classes from './SideDrawer.module.css';
import Logo from '../../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const sideDrawer = (props) => {


    return (
        <div className={classes.SideDrawer}>
            <Logo />
            <nav>
                <NavItems />
            </nav>
        </div>
    );
}

export default sideDrawer;

