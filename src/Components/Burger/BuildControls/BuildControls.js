import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const burgerControls = (props) => ( //render a list of build controls with Order button
    <div className={classes.BuildControls}>
        {/* round the price value into 2 decimal */}
        <p>Current price: {props.price.toFixed(2)}</p> 
    
        {/* loop through the controls array and pass info accordingly into a single BuildControl component */}
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.addIngredient(ctrl.type)}
            removed={() => props.removeIngredient(ctrl.type)}
            disabled = {props.disabled[ctrl.type]}
            />
        ))}

        <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.ordered}
            >
            ORDER NOW
        </button>
    </div>
);

export default burgerControls;