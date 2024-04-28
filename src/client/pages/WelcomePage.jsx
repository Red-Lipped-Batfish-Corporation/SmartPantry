import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  // Function to handle alert, not fully implemented here
  const showAlert = () => alert('Your items expire on Tuesday!');

  return (
    <div>
      <h1>Welcome to the grocery tracker</h1>
      <button onClick={showAlert}>Show Alert</button>
      {/* <Link to="/pantry">Add to Pantry</Link>
      <Link to="/recipes">Recipes</Link> */}
    </div>
  );
};

export default WelcomePage;