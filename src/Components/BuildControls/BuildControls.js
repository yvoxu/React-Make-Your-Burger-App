import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const burgerControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: {props.price.toFixed(2)}</p>
    
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
            disabled={!props.purchasable}>
            ORDER NOW
        </button>
    </div>
);

export default burgerControls;