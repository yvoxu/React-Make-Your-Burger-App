import React from 'react';

import classes from './Backdrop.module.css';

//This func shows a slightly dark background when the OrderSummary modal appears. 

const backdrop = (props) => ( 
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
)

export default backdrop;