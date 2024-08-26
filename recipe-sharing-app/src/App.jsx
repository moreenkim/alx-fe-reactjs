import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import FavoritesList from './components/FavouriteList';
import RecommendationsList from './components/RecommendationsList'

function App() {

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 rounded-lg shadow-md bg-white text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Recipe list</h1>
        </div>
        <div className="mb-4">
          <RecipeList />
        </div>
         <AddRecipeForm />
      </div>
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/edit-recipe/:id" element={<EditRecipeForm />} />
            <Route path="/delete-recipe/:id" element={<DeleteRecipeButton />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/recommendations" element={<RecommendationsList />} />
          </Routes>
        </main>
    </div>
  );
}

export default App
