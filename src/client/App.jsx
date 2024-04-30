/*
 * @Author: Christie Laferriere & Jing xiajing1103@gmail.com
 * @Date: 2024-04-28 5:40 pm
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-04-30 02:26:22
 */

import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import PantryPage from './pages/PantryPage';
import WelcomePage from './pages/WelcomePage';
import './red-lip.css';
import RecipeMainContainer from './containers/RecipeMainContainer';

const App = () => {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/pantry" element={<PantryPage />} />
                    <Route path="/recipes" element={<RecipeMainContainer />} />
                </Routes>
            </HashRouter>
        </div>

    )
}

export default App;


