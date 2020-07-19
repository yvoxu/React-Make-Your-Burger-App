import React from 'react';
import classes from './BuildControl.module.css'

const burgerControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.Less}>More</button>
    </div>
);

export default burgerControl;