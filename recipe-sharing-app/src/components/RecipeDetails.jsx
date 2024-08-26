import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useRecipeStore from '../path/to/your/store';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === id)
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Instructions</h4>
      <p>{recipe.instructions}</p>
      <Link to={`/recipe/${id}/edit`}>Edit Recipe</Link>
      <DeleteRecipeButton id={id} />
    </div>
  );
};

export default RecipeDetails;
