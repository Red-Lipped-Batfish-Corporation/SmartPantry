import React from 'react';
import Button from "./Button";
import Input from "./Input"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeCard } from './RecipeCard';

  const App = () => {
      return (
        <Router>
              <div>
                  <Button />  
                  <Input />
        </div>  
        </Router>

      
        
    )
  }

export default App;