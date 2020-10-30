import React from 'react'
import Recipe from './Recipe'

const Recipes = ({ recipes }) => {
    return (
        <section className="recipeContainer">
            { recipes.map(recipe => (
                <Recipe 
                    key={recipe.recipe.label}
                    {...recipe.recipe}
                    recipe={recipe}
                />
            ))}
        </section>
    )
}

export default Recipes;