import React, { useState, useEffect } from 'react';


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Load the data from data.json when the component mounts
  useEffect(() => {
    fetch('../data.json') 
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes)) 
      .catch((error) => console.error('Error loading recipes:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Delicious Recipes</h1>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden"
          >
            <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
