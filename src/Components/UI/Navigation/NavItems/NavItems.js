import React from 'react';

import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.css';


const navItems = (props) => (
    <ul className={classes.NavItems}>
        <NavItem link="/" active>Make Your Burger</NavItem>
        <NavItem link="/">Check Out</NavItem>
    </ul>
)

export default navItems;