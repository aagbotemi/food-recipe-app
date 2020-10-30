import React from 'react'

const Recipe = ({ recipe }) => {
    const { label, dietLabels, image, calories, ingredients, digest } = recipe.recipe;

    return (
        <section className="recipe">
            <h1>{label} ~ <small>{ dietLabels }</small></h1>
            
            <img src={image} alt={label} />

            <h3>{(calories).toFixed(2)} kcal</h3>

            <div className="ingredients">
                <h4>Ingredients</h4>
                <ul>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ul>
            </div>

            <div className="digestive">
                <h4>Digests Level</h4>
                <ul>
                    {digest.map(dgst => (
                        <li>
                            {dgst.label}: <span>{(dgst.total).toFixed(2)}{dgst.unit}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
        </section>
    )
}

export default Recipe;