import React from 'react';
import style from './recipe.module.css'
function Recipe({ title, calories, img, ingredients }) {
    return (
        <div className={style.recipe}>
            <h1> {title}</h1>
            <ol>
                {ingredients.map((ingredient) => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p> {Math.round(calories) + " kcal"}</p>
            <img className={style.image} src={img} alt="" />
        </div>
    );
};

export default Recipe;