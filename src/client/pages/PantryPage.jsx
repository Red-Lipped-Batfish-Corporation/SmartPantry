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

export default PantryPage