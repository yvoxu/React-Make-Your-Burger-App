import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/BuildControls/BuildControls'

const INGREDIENT_PRICES = { //global const naming convention
    salad: 1,
    bacon: 1.5,
    cheese: 1.2,
    meat: 2
}


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;

        const additionalPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + additionalPrice;
        
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if(oldCount <= 0){
            return;
        }

        const newCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) { //loop through ingredients e.g. salad, meat...
            disabledInfo[key] = disabledInfo[key] <= 0 //assign boolean value to disabledInfo i.e. return T/F (whether the Less butoon should be disabled) to each ingredient 
        }

        return(
            <Aux>
                {/* Graphical Burger */}
                <Burger ingredients={this.state.ingredients}/>
                {/* Build Controls where I can add/remove ingredients */}
                <BuildControls 
                    addIngredient = {this.addIngredientHandler}
                    removeIngredient = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder