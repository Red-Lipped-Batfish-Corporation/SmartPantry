/*
 * @Author: Peter Gao 
 * @Date: 2024-04-27 16:03:29 
 * @Last Modified by: peter_gao@outlook.com
 * @Last Modified time: 2024-04-29 17:18:42
 */


import DropdownList from '../components/DropdownList';
import { Link } from 'react-router-dom';

import React from 'react'

const RecipeMainContainer = (props) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <DropdownList {...props} />
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

export default RecipeMainContainer