import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from '../path/to/your/store';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === id)
  );
  const isFavorite = useRecipeStore((state) =>
    state.favorites.some((favorite) => favorite.id === id)
  );
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(recipe);
    }
  };

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
      <button onClick={handleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeDetails;
