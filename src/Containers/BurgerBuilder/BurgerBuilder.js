import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'

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
        totalPrice: 4, //base price for a burger with no additional ingredients
        purchasable: false, // whether the order is able to be placed i.e are there any extra ingredients added
        purchasing: false // after the order botton is clicked i.e. when the user wants to make an order
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients //use js spread method to make a copy
        };
        updatedIngredients[type] = newCount; //assign the new amount of ingredients

        const additionalPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + additionalPrice;
        
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        //if the current ingredient amount is already less than 0 then the user can't remove that ingredient
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
        this.updatePurchaseState(updatedIngredients)
    }

    updatePurchaseState (updatedIngredients) {

        const sum = Object.keys(updatedIngredients) //convert a js object into an array of ingredients i.e. [salad, meat...]
            .map(ingredientsKey => { //loop through the array by ingredient name
                return updatedIngredients[ingredientsKey]; // get the amount of each ingredient 
            })
            .reduce((sum, element) => {
                return sum + element; //calculate the total of the amount of each ingredient 
            },0);
        this.setState({ purchasable: sum > 0 }) //if sum>0, set purchasable to true. Meaning the Order button is clickable
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) { //loop through ingredients e.g. salad, meat...
            disabledInfo[key] = disabledInfo[key] <= 0 //assign boolean value to disabledInfo i.e. return T/F (whether the Less butoon should be disabled) for each ingredient 
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                {/* Graphical Burger */}
                <Burger ingredients={this.state.ingredients}/>
                {/* Build Controls where I can add/remove ingredients */}
                <BuildControls 
                    addIngredient = {this.addIngredientHandler}
                    removeIngredient = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    ordered = {this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder