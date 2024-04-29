import React from 'react';
// import Button from './components/Button';
// import Button2 from './components/Button2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeCard } from './components/RecipeCard';
import RecipeMainContainer from './containers/RecipeMainContainer'
import PantryPage from './pages/PantryPage';
import RecipesPage from './pages/RecipesPage';
import WelcomePage from './pages/WelcomePage';
import './red-lip.css';

  const App = () => {
      return (
        <div>
           {/* <Router>
              <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path='/pantry' 
                element = {<PantryPage/>} />
              <Route path ='/recipes'
                element = {<RecipesPage/>}/>
              </Routes>
            <Recommd/>
              <Button to="pantry"/>
              <Button2 to="recipes"/>
            </Router> */}
                {/* <Router>
                <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/pantry" element={<PantryPage />} />
                <Route path="/recipes" element={<RecipesPage />} />
              </Routes>
              </Router> */}
              <RecipeMainContainer />
        </div>      

    )
}

export default App;

