import React from 'react';

import Aux from '../../hoc/Aux'

const layout = (props) => (
    <Aux>
        {/* Toolbar, Sidebar, Backdrop */}
        <main>
            {props.children}
        </main>
    </Aux>
)

export default layout