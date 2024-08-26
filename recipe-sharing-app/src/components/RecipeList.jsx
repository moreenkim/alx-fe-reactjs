import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../path/to/your/store';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
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
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                {recipe.name}
              </Link>
            </li>
          ))
        ) : (
          <li>No recipes found</li>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;
