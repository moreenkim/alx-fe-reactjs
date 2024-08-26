import React from 'react';
import useRecipeStore from '../path/to/your/store';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const updateSearchTerm = useRecipeStore((state) => state.updateSearchTerm);

  const handleSearch = (e) => {
    updateSearchTerm(e.target.value); // Trigger filtering when the search term changes
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleSearch}
      />
      <ul>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <li key={recipe.id}>{recipe.name}</li>
          ))
        ) : (
          <li>No recipes found</li>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;
