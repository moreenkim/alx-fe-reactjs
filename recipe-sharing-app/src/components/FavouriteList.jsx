import React from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);

  return (
    <div>
      <h2>Your Favorite Recipes</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                {recipe.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite recipes yet</p>
      )}
    </div>
  );
};

export default FavoritesList;
