/*
 * @Author: Christie Laferriere & Jing xiajing1103@gmail.com
 * @Date: 2024-04-28 5:40 pm
 * @Last Modified by: peter_gao@outlook.com
 * @Last Modified time: 2024-04-29 17:21:44
 */

import React from "react";
import { Link } from 'react-router-dom';
import Recommd from "../components/Recommd";
import '../red-lip.css';


function RecipesPage() {
    return (

        <div className="recipes">
            <h1>This is the Recipes page</h1>
            <Recommd />
            <div className="navigation-buttons">
                <Link to="/">
                    <button type="button">Take me to the Welcome Page</button>
                </Link>
                <Link to="/pantry">
                    <button type="button">Take me to the Pantry Page</button>
                </Link>
            </div>
        </div>
    )
}

export default RecipesPage;

