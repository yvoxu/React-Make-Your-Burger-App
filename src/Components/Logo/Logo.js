import React from 'react';

import Logo from '../../Images/burger-logo.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={Logo} alt="Logo"/>
    </div>
)

export default logo;