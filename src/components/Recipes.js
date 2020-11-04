import React from 'react'
import Recipe from './Recipe'
import Popup from './Popup'

const Recipes = ({ recipes }) => {
    return (
        <section className="recipeContainer">
            { recipes.map(recipe => {
                return (
                    <div>
                        <Recipe
                            key={recipe.recipe.label}
                            {...recipe.recipe}
                            recipe={recipe}
                        />
                        <Popup
                            key={recipe.recipe.label}
                            {...recipe.recipe}
                        />
                    </div>
                )
            })}
        </section>
    )
}

export default Recipes;