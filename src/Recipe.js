import React from 'react';
import { ingredientItems } from './IngredientList.js';
import './recipe.css';

export default class MyRecipe extends React.Component {
    render() {
        const ingList = ingredientItems.map(ing => <div>
            <input className='recipes' type='checkbox' /><label>{ing.amount} {ing.name}</label>
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