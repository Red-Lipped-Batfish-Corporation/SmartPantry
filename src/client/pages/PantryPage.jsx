import Input from "../components/Input";
import React from 'react'
import { Link } from 'react-router-dom';
import '../red-lip.css'; 

function PantryPage() {
  return (

    <div className="pantry">
      <h1>This is the Pantry page</h1>

      {/* Navigation buttons */}
      <Input/>
      <div className="navigation-buttons">
        <Link to="/">
          <button type="button">Take me to Welcome Page</button>
        </Link>
        <Link to="/recipes">
          <button type="button">Take me to Recipes Page</button>
        </Link>
      </div>
    </div> 
  )
}

export default PantryPage;

/*
 * @Author: Christie Laferriere & Jing xiajing1103@gmail.com
 * @Date: 2024-04-28 5:40 pm
 * @Last Modified by: christie.laferriere@gmail.com 
 * @Last Modified time: 2024-04-29 1:30 AM 
 */