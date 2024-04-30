/*
 * @Author: Christie Laferriere & Jing xiajing1103@gmail.com
 * @Date: 2024-04-28 5:40 pm
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-04-30 02:27:06
 */

import Input from "../components/Input";
import React from 'react';
import Table from "../components/Table"
import { Link } from 'react-router-dom';
import '../red-lip.css';

function PantryPage() {
    return (

    <div className="pantry">
      <h1>Hello, Your Pantry List is here</h1>
            <Input />
            <div className="navigation-buttons">
                <Link to="/">
                    <button type="button">Take me to Welcome Page</button>
                </Link>
                <Link to="/recipes">
                    <button type="button">Take me to Recipes Page</button>
                </Link>
            </div>
            <div>   
                <hr/>
                <Table/>
            </div>
        </div>
    )
}

export default PantryPage;

