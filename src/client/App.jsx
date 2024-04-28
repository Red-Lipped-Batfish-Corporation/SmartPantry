import React from 'react';
import Button from './components/Button';
import Button2 from './components/Button2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeCard } from './components/RecipeCard';
import Recommd from './components/Recommd';
import PantryPage from './pages/PantryPage';
import RecipesPage from './pages/RecipesPage';

  const App = () => {
      return (
        <div>
           <Router>
              <Button to="pantry"/>
              <Button2 to="recipes"/>
              <Routes>
              <Route path='/pantry' 
                element = {<PantryPage/>} />
              <Route path ='/recipes'
                element = {<RecipesPage/>}/>
              </Routes>
            </Router>
            <Recommd/>
        </div>      

    )
}

export default App;

