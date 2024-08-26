import React from 'react';
import useRecipeStore from '../path/to/your/store';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.getRecommendations());

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                {recipe.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available</p>
      )}
    </div>
  );
};

export default RecommendationsList;
