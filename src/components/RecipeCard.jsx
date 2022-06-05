import React, { useState } from 'react';
const RecipeCard = ({ recipe }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='card'>
      <figure>
        <img src={recipe.image} alt={recipe.label} />
      </figure>
      <div className='card__container'>
        <p className='card__title'>{recipe.label}</p>

        <h4>{Math.round(recipe.calories)} Kcal</h4>
        <button className='card__button' onClick={() => setShow(!show)}>
          {!show ? 'Show Ingredients' : 'Hide Ingredients'}
        </button>
        {show ? (
          <div>
            {recipe.ingredients.map((ingredient, i) => (
              <p key={i}>{ingredient.text}</p>
            ))}
          </div>
        ) : (
          <div>
            {recipe.healthLabels.map((label) => (
              <li className='health__labels'>{label}</li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default RecipeCard;
