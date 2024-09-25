import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('../data.json') 
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.recipes.find((recipe) => recipe.id === parseInt(id));
        if (foundRecipe) {
          setRecipe(foundRecipe);
        } else {
          setError('Recipe not found');
        }
      })
      .catch((error) => setError('Failed to fetch recipe data'));
  }, [id]);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!recipe) {
    return <div className="text-center">Loading...</div>;
  }


  return (
    <div className="container mx-auto p-4 lg:p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">{recipe.title}</h1>
      
      <div className="lg:flex lg:space-x-8">
        {/* Recipe Image */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img className="w-full rounded-lg shadow-lg" src={recipe.image} alt={recipe.title} />
        </div>

        {/* Recipe Details */}
        <div className="lg:w-1/2">
          {/* Ingredients Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Cooking Instructions Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Instructions</h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {recipe.instructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
