import React from 'react';

import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => { //an order summary pop up which appears after Order button is clicked

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
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>No</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Yes</Button>
        </Aux>
    )
}

export default orderSummary;