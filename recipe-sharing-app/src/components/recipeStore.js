import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],

  // Existing actions...
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: get().computeFilteredRecipes(newRecipe, state.searchTerm),
  })),
  deleteRecipe: (id) => set((state) => {
    const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
    return {
      recipes: updatedRecipes,
      filteredRecipes: get().computeFilteredRecipes(updatedRecipes, state.searchTerm),
      favorites: state.favorites.filter((favorite) => favorite.id !== id),
    };
  }),
  updateRecipe: (updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: get().computeFilteredRecipes(updatedRecipes, state.searchTerm),
    };
  }),
  setRecipes: (recipes) => set({ 
    recipes, 
    filteredRecipes: get().computeFilteredRecipes(recipes, get().searchTerm),
  }),
  setSearchTerm: (term) => set({
    searchTerm: term,
    filteredRecipes: get().computeFilteredRecipes(get().recipes, term),
  }),
  addFavorite: (recipe) => set((state) => ({
    favorites: [...state.favorites, recipe]
  })),
  removeFavorite: (id) => set((state) => ({
    favorites: state.favorites.filter((favorite) => favorite.id !== id)
  })),

  // Action to get recommendations based on favorites
  getRecommendations: () => {
    const { recipes, favorites } = get();
    if (favorites.length === 0) return [];

    // Simple recommendation logic: recommend recipes that are not in favorites
    const favoriteIds = new Set(favorites.map(recipe => recipe.id));
    return recipes.filter(recipe => !favoriteIds.has(recipe.id));
  },

  // Computed property to filter recipes based on the search term
  computeFilteredRecipes: (recipes = get().recipes, searchTerm = get().searchTerm) => {
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
}));

export default useRecipeStore;
