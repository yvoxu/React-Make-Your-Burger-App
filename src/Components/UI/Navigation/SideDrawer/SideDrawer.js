import React from 'react';

import classes from './SideDrawer.module.css';
import Logo from '../../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const sideDrawer = (props) => {


    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavItems />
            </nav>
        </div>
    );
}

export default sideDrawer;

