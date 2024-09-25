import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState('');  // State for storing error messages
  const [submitted, setSubmitted] = useState(false);

  // Validation function
  const validate = () => {
    if (!title || !ingredients || !steps) {
      return 'All fields are required.';
    }

    const ingredientsList = ingredients.split('\n').filter((ingredient) => ingredient.trim() !== '');
    if (ingredientsList.length < 2) {
      return 'Please provide at least two ingredients.';
    }

    return null;  // Return null if there are no validation errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Run validation
    const validationError = validate();
    if (validationError) {
      setErrors(validationError);  // Set error state if validation fails
      return;
    }

    // If validation passes, create new recipe object
    const newRecipe = {
      title,
      ingredients: ingredients.split('\n').map(ingredient => ingredient.trim()), // Split ingredients by line and trim spaces
      steps,
    };

    console.log('Submitted Recipe:', newRecipe);  // Handle form submission (e.g., save to API or state)
    setSubmitted(true);  // Indicate that the recipe was submitted

    // Reset form fields
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors('');  // Clear errors on successful submission
  };

  return (
    <div className="container shadow-md mx-auto p-4 lg:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Add a New Recipe</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">Ingredients (One per line)</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter each ingredient on a new line"
          />
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">Preparation Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter the preparation steps"
          />
        </div>

        {/* Error Message */}
        {errors && <div className="text-red-500 mb-4 text-sm">{errors}</div>}  {/* Display errors if any */}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit Recipe
          </button>
        </div>

        {/* Success Message */}
        {submitted && <div className="text-green-500 mt-4 text-center">Recipe submitted successfully!</div>}
      </form>
    </div>
  );
};

export default AddRecipeForm;
