import React from 'react';

import classes from './Burger.css';
import Ingredients from './Ingredients/Ingredients';

const burger = (props) => {

    //transfer an object of key value pairs into an array of ingredients 
    var transformedIngredients = Object.keys(props.ingredients) //extract ingredient names from props
        .map(ingredientsKey => {
            return [...Array(props.ingredients[ingredientsKey])].map((_, i) => {
                return <Ingredients key={ ingredientsKey + i } type={ingredientsKey} />;
            });
        })
        .reduce((arr, element) => {
            return arr.concat(element)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Time to start make your burger!</p>
    }

    return (
        <div className={classes.Burger}>
            <Ingredients type="bread-top"/>
            {transformedIngredients}
            <Ingredients type="bread-bottom"/>
        </div>
    );
};

export default burger;