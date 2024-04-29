/*
 * @Author: Peter Gao 
 * @Date: 2024-04-27 15:38:27 
 * @Last Modified by: peter_gao@outlook.com
 * @Last Modified time: 2024-04-28 22:48:50
 */

import React, { useState } from 'react';
import { Dropdown, Button, Card } from 'react-bootstrap';
import { AiOutlineClose } from "react-icons/ai";
import RecipeCard from './RecipeCard';
import RecipesData from '../statics/data';


function DropdownList() {

    // track the state of the selection
    const [selectedItems, setSelectedItems] = useState([]);
    // track the recipes
    const [recipes, setRecipes] = useState([]);


    // handle select
    const handleSelect = (eventKey) => {
        const index = selectedItems.indexOf(eventKey);
        if (index === -1) {
            // if user select one item, add this to array
            setSelectedItems([...selectedItems, eventKey]);
        } else {
            // if user cancel the selection, pop this item from the array
            setSelectedItems(selectedItems.filter(item => item !== eventKey));
        }
    };

    // Cancel selection
    const handleCancel = (item) => {
        setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
    };

    // Request the recipe
    const handleRequest = () => {
        try {
            // based on this example:https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2 use join method to combine the ingredients.
            // const response = fetch(`/api/recipes?ingredients=${selectedItems.join(',')}`);
            // if (!response.ok) {
            //     throw new Error('Failed to fetch data from API with status: ' + response.status);
            // }
            // const data = response.json();
            // setRecipes(data.recipes);

            const selectedRecipeData = RecipesData.find(recipe => recipe.missedIngredients[2].originalName === selectedItems[0]);
            console.log('Statics data is: ', selectedRecipeData)

            setRecipes(selectedRecipeData);
        } catch (error) {
            console.error('Error fetching recipe data:', error);
        }
    }

    return (
        <div>
            {/* Dropdown list */}
            <Dropdown onSelect={handleSelect} style={{ backgroundColor: 'white' }}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ backgroundColor: '#17C3B2' }}>
                    Choose the ingredient from your grocery list:
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="Tomato">Tomato</Dropdown.Item>
                    <Dropdown.Item eventKey="egg">Eggs</Dropdown.Item>
                    <Dropdown.Item eventKey="Chicken">Chicken</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div>
                <h4>Your chose: </h4>
                {/* Iterate the selected items and show them in the card */}
                {selectedItems.map(item => (
                    <Card key={item} style={{ backgroundColor: '#FEF9EF', width: '200px', margin: '5px', display: 'flex', justifyContent: 'space-between' }}>
                        <Card.Body>
                            <Card.Text>{item}</Card.Text>
                            <AiOutlineClose style={{ color: 'red', cursor: 'pointer', marginRight: '10px' }} onClick={() => handleCancel(item)} />
                        </Card.Body>
                    </Card>
                ))}
                {/* If no chose, show some hint */}
                {selectedItems.length === 0 && <p>Please choose your item above.</p>}

                {/* If user selected the ingredients, they should click "Give me the recipe" Button */}
                <Button variant="primary" onClick={handleRequest} style={{ backgroundColor: '#FE6D73', width: '200px', margin: '5px' }}>Let's find the recipes!!! </Button>{' '}
                <div>
                    <RecipeCard recipes={recipes} />
                </div>


            </div>
        </div >
    );
}

export default DropdownList;
