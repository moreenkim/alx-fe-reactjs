import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Action to add a new recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: get().computeFilteredRecipes(newRecipe, state.searchTerm),
  })),

  // Action to delete a recipe by its id
  deleteRecipe: (id) => set((state) => {
    const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
    return {
      recipes: updatedRecipes,
      filteredRecipes: get().computeFilteredRecipes(updatedRecipes, state.searchTerm),
    };
  }),

  // Action to update a recipe by its id
  updateRecipe: (updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: get().computeFilteredRecipes(updatedRecipes, state.searchTerm),
    };
  }),

  // Action to set recipes
  setRecipes: (recipes) => set({ 
    recipes, 
    filteredRecipes: get().computeFilteredRecipes(recipes, get().searchTerm),
  }),

  // Action to update the search term
  updateSearchTerm: (term) => set({
    searchTerm: term,
    filteredRecipes: get().computeFilteredRecipes(get().recipes, term),
  }),

  // Computed property to filter recipes based on the search term
  computeFilteredRecipes: (recipes = get().recipes, searchTerm = get().searchTerm) => {
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
}));

export default useRecipeStore;
