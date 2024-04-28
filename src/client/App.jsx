import React from 'react';
import Button from './components/Button';
import Button2 from './components/Button2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeCard } from './components/RecipeCard';
import Recommd from './components/Recommd';
import PantryPage from './pages/PantryPage';
import RecipesPage from './pages/RecipesPage';
import WelcomePage from './pages/WelcomePage';
import './red-lip.css';

  const App = () => {
      return (
        <div>
           <Router>
              <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path='/pantry' 
                element = {<PantryPage/>} />
              <Route path ='/recipes'
                element = {<RecipesPage/>}/>
              </Routes>
              <Button to="pantry"/>
              <Button2 to="recipes"/>
            </Router>
            <Recommd/>
        </div>      

    )
}

export default App;

