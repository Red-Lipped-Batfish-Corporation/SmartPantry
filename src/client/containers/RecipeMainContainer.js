/*
 * @Author: Peter Gao 
 * @Date: 2024-04-27 16:03:29 
 * @Last Modified by: peter_gao@outlook.com
 * @Last Modified time: 2024-04-28 21:23:25
 */


import DropdownList from '../components/DropdownList';
import RecipeCard from '../components/RecipeCard';

import React from 'react'

const RecipeMainContainer = (props) => {
    return (
        <div style={{ margin: '40px' }}>
            <div style={{ backgroundColor: '#FFCB77' }}>Yellow</div>
            <div style={{ backgroundColor: '#17C3B2' }}>green</div>
            <div style={{ backgroundColor: '#227C9D' }}>blue</div>
            <div style={{ backgroundColor: '#FEF9EF' }}>khaki</div>
            <div style={{ backgroundColor: '#FE6D73' }}>red</div>
            <DropdownList {...props} />
        </div>
    )
}

export default RecipeMainContainer