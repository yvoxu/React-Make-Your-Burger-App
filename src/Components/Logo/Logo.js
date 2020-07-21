import React from 'react';

import Logo from '../../assets/Images/burger-logo.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={Logo} alt="Logo"/>
    </div>
)

export default logo;