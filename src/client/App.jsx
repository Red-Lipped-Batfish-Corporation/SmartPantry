import React from 'react';
import Input from "./Input"
import Button from './Button';
import Button2 from './Button2'
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