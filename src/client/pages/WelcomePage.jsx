import React from 'react';
import { Link } from 'react-router-dom';
import Recommd from '../components/Recommd';
import Alert from '../components/Alert';
import '../red-lip.css'; 

const WelcomePage = () => {
//   // Function to handle alert, not fully implemented here
//   const showAlert = () => alert('Your items expire on Tuesday!');

  return (
    <div>
      <h1>Welcome to the grocery tracker</h1>
      {/* <button onClick={showAlert}>Show Alert</button> */}
      <Alert />
      <Recommd/>
      <div className="navigation-buttons">
        <Link to="/pantry">
          <button type="button">Take me to the Pantry Page</button>
        </Link>
        <Link to="/recipes">
          <button type="button">Take me to the Recipes Page</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;

/*
 * @Author: Christie Laferriere
 * @Date: 2024-04-28 5:40 pm
 * @Last Modified by: christie.laferriere@gmail.com
 * @Last Modified time: 2024-04-29 1:30 AM 
 */