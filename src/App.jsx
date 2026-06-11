import React, { useState } from "react";
import "./App.css";

function App() {
  
  const [recipes, setRecipes] = useState([]);

  
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  
  const addRecipe = () => {
    
    if (
      recipeName.trim() === "" ||
      ingredients.trim() === "" ||
      steps.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    
    const newRecipe = {
      id: Date.now(),
      name: recipeName,
      ingredients: ingredients,
      steps: steps,
    };

    
    setRecipes([...recipes, newRecipe]);

    
    setRecipeName("");
    setIngredients("");
    setSteps("");
  };

  
  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter(
      (recipe) => recipe.id !== id
    );

    setRecipes(updatedRecipes);
  };

  return (
    <div className="container">
      <h1>Recipe Book</h1>

      
      <input
        type="text"
        placeholder="Enter Recipe Name"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
      />

      <textarea
        placeholder="Enter Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <textarea
        placeholder="Enter Cooking Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      />

      <button onClick={addRecipe}>Add Recipe</button>

      
      <div className="recipe-list">
        <h2>All Recipes</h2>

        {recipes.length === 0 ? (
          <p>No recipes added</p>
        ) : (
          recipes.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>
              <h3>{recipe.name}</h3>

              <p>
                <strong>Ingredients:</strong>
                <br />
                {recipe.ingredients}
              </p>

              <p>
                <strong>Steps:</strong>
                <br />
                {recipe.steps}
              </p>

              <button
                className="delete-btn"
                onClick={() => deleteRecipe(recipe.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;