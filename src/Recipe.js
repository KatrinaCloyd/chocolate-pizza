import React from 'react';
import { ingredientItems } from './IngredientList.js';
import './recipe.css';

export default class MyRecipe extends React.Component {
    render() {
        const ingList = ingredientItems.map(ing => <div>
            <input type='checkbox' />{ing.amount} {ing.name}
        </div>
        );
        return (
            <div>
                <div className="ingredients">
                    {ingList}
                </div>
            </div>
        )
    }
}