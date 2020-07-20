import React from 'react';

import classes from './Toolbar.module.css';
import logo from '../../Images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Log}>
        <img src={logo} alt="Logo"/>
    </div>
)

export default logo;