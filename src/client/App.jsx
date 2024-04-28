import React from 'react';
import Input from "./Input"
import Button from './Button';
import Button2 from './Button2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeCard } from './components/RecipeCard';
import { Dropdown } from 'react-bootstrap';
import DropdownList from './components/DropdownList'
import { RecipeMainContainer } from './containers/RecipeMainContainer';
const App = () => {
    return (
        // <Router>
        //     <div>
        //         <Button />
        //         <Input />
        //     </div>
        // </Router>
<RecipeMainContainer />
    )
}

export default App;