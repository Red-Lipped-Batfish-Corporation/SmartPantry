/*
 * @Author: Christie Laferriere
 * @Date: 2024-04-28 5:40 pm
 * @Last Modified by: peter_gao@outlook.com
 * @Last Modified time: 2024-04-29 17:21:58
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Recommd from '../components/Recommd';
import Alert from '../components/Alert';
import '../red-lip.css';

const WelcomePage = () => {

    return (
        <div>
            <h1>Welcome to the Grocery Tracker</h1>
            <Alert />
            <Recommd />
            <div className="navigation-buttons">
                <Link to="/pantry">
                    <button type="button">Take me to the Pantry Page</button>
                </Link>
                <Link to="/recipes">
                    <button type="button">Take me to the Recipes Page</button>
                </Link>
            </div>
        </div>
    );
};

export default WelcomePage;

