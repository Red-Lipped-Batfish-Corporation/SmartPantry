import React from "react";
import RecipeCard from "../components/RecipeCard";
import { Link } from 'react-router-dom';
import Recommd from "../components/Recommd";
import '../red-lip.css';


function RecipesPage() {
  return (

    <div className="recipes">
      <h1>This is the Recipes page</h1>
      <RecipeCard/>
      <Recommd/>
      <div className="navigation-buttons">
        <Link to="/">
          <button type="button">Take me to the Welcome Page</button>
        </Link>
        <Link to="/pantry">
          <button type="button">Take me to the Recipes Page</button>
        </Link>
      </div>
    </div> 
  )
}

export default RecipesPage