import React from 'react'
import { useGlobalContext } from './context';

const Recipe = ({ recipe }) => {
    const {openPopup} = useGlobalContext()

    const { label, dietLabels, image, calories } = recipe.recipe;

    return (
        <section>
        
            <div className="recipe">
                    <h1>{label} ~ <small>{ dietLabels }</small></h1>
                    <img src={image} alt={label} />
                    <h3>{(calories).toFixed(2)} kcal</h3>
                </div>
                <button onClick={openPopup}>More Information</button>
        </section>
    )
}

export default Recipe;
