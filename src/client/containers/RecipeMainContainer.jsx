/*
 * @Author: Peter Gao 
 * @Date: 2024-04-27 16:03:29 
 * @Last Modified by: peter_gao@outlook.com
 * @Last Modified time: 2024-04-29 08:16:11
 */


import DropdownList from '../components/DropdownList';
import RecipeCard from '../components/RecipeCard';
import { Link } from 'react-router-dom';

import React from 'react'

const RecipeMainContainer = (props) => {
    return (
        <div style={{ margin: '40px' }}>
            <DropdownList {...props} />
            <RecipeCard {...props} />
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

export default RecipeMainContainer