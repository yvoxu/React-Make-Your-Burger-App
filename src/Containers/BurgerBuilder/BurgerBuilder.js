import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/BuildControls/BuildControls'

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render () {
        return(
            <Aux>
                {/* Graphical Burger */}
                <Burger ingredients={this.state.ingredients}/>
                {/* Build Controls where I can add/remove ingredients */}
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder