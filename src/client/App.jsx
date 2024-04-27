import React from 'react';
import Input from "./Input"
import Button from './Button';
import Button2 from './Button2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeCard } from './RecipeCard';

  const App = () => {
      return (
<<<<<<< HEAD
        // <Router>
        //       <div>
        //   <Button />  
        // </div>  
        // </Router>
        <RecipeCard />
=======
        <Router>
              <div>
                  <Button />  
                  <Input />
        </div>  
        </Router>
>>>>>>> dev

      
        
    )
  }

export default App;