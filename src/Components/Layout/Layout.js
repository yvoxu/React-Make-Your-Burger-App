import React from 'react';

import Aux from '../../hoc/Aux'
import classes from './Layout.module.css'
import Toolbar from '../UI/Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <Aux>
        {/* Toolbar, Sidebar, Backdrop */}
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout