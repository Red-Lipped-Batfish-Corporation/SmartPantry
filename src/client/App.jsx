/*
 * @Author: Christie Laferriere & Jing xiajing1103@gmail.com
 * @Date: 2024-04-28 5:40 pm
 * @Last Modified by: peter_gao@outlook.com
 * @Last Modified time: 2024-04-29 17:26:43
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PantryPage from './pages/PantryPage';
import WelcomePage from './pages/WelcomePage';
import './red-lip.css';
import RecipeMainContainer from './containers/RecipeMainContainer';

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/pantry" element={<PantryPage />} />
                    <Route path="/recipes" element={<RecipeMainContainer />} />
                </Routes>
            </Router>
        </div>

    )
}

export default App;


