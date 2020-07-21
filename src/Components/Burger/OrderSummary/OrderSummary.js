import React, {Component} from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

// This could be a functional component, doesn't have to be a class
class OrderSummary extends Component { //an order summary pop up which appears after Order button is clicked

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients) //transfer the js object into an array of ingredient keys: [salad, meat...]
            .map(igKey => {
                return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>)
    });

    return (
        <Aux>
            <h3>Your Order:</h3>
            <p>Your delicious burger has the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>No</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>Yes</Button>
        </Aux>
    );}
}

export default OrderSummary;