import React from 'react';
import Button from './Button';
import Button2 from './Button2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeCard } from './RecipeCard';
import Table from './Table';

  const App = () => {
      return (
        <Router>
              <div>
                  <Button />  
                  <Button2 />
                  <Table />
        </div>  
        </Router>

      
        
    )
  }

export default App;