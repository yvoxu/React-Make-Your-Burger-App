import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Navigation/Toolbar/Toolbar'
import NavItems from '../NavItems/NavItems'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Logo />
    <nav>
        <NavItems />
    </nav>
  </header>
)

export default toolbar;