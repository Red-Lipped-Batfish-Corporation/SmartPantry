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

/*
 * @Author: Christie Laferriere & Jing xiajing1103@gmail.com
 * @Date: 2024-04-28 5:40 pm
 * @Last Modified by: christie.laferriere@gmail.com 
 * @Last Modified time: 2024-04-29 1:30 AM 
 */