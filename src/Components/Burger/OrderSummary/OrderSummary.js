import React from 'react';

import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients) //transfer the js object into an array of ingredient keys: [salad, meat...]
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>)
        });

    return (
        <Aux>
            <h3>Your Order:</h3>
            <p>Your delicious burger has the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <button>Continue to Checkout</button>
        </Aux>
    )
}

export default orderSummary;