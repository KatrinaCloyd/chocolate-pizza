import React from 'react';
import { ingredientItems } from './IngredientList.js';

export default class MyRecipe extends React.Component {
    render() {
        const ingList = ingredientItems.map(ing => <div>
            <p>{ing.amount} {ing.name}</p>
        </div>
        );
        return(
            <div>
                <div className="ingredients">
                    {ingList}
                </div>
            </div>
        )
    }
}