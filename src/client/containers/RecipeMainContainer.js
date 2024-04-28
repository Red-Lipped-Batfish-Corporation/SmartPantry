/*
 * @Author: Peter Gao 
 * @Date: 2024-04-27 16:03:29 
 * @Last Modified by: peter_gao@outlook.com
 * @Last Modified time: 2024-04-27 16:06:36
 */


import DropdownList from '../components/DropdownList';
import RecipeCard from '../components/RecipeCard';

import React from 'react'

export const RecipeMainContainer = (props) => {
    return (
        <div>
            <DropdownList {...props} />
            <RecipeCard {...props} />
        </div>
    )
}
