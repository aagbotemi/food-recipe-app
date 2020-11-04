import React from 'react'
import { useGlobalContext } from './context';

const Popup = ({recipes}) => {
    const { isPopupOpen, closePopup } = useGlobalContext()
    
    return (
        <section className={`${isPopupOpen ? 'modal-overlay show-modal' : 'modal-overlay' }`}>
            {recipes.map((item) => {
                const { ingredients, digest } = item.recipe;
                return (
                    <article>
                        <div className="ingredients">
                            <h4>Ingredients</h4>
                            <ul>
                                {ingredients.map(ingredient => (
                                    <li>{ingredient.text}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="digestive">
                            <h4>Nutrient Information</h4>
                            <ul>
                                {digest.map(dgst => (
                                    <li>
                                        {dgst.label}: <span>{(dgst.total).toFixed(2)}{dgst.unit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <button onClick={closePopup}>
                            Back
                        </button>
                    </article>
                )
            })}

        </section>
    )
}

export default Popup
