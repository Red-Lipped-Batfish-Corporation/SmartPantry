/*
 * @Author: Peter Gao  & Christie laferriere
 * @Date: 2024-04-27 15:38:27 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-04-29 14:55:25
 */

import React, { useState } from 'react';
import { Dropdown, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { AiOutlineClose } from "react-icons/ai";
// import RecipeCard from './RecipeCard';
import RecipesData from '../statics/data';
// import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';

function DropdownList() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [recipes, setRecipes] = useState({});

    // const steps = [
    //     'Step 1: In a bowl, add chuck, sirloin, bread crumbs, steak sauce, eggs, salt, and pepper, and mix gently with fork.',
    //     'Step 2: Form 4 patties out of this mixture.',
    //     'Step 3: Cook the hamburgers patties on each side, then cover with aluminium foil.',
    //     'Step 4: Cut the sides of the bun, then grill in a stove-top grill until toasted.',
    //     'Step 5: Place patties and a slice of blue cheese in each bun.',
    //     'Step 6: Serve hot.'
    // ]

    const handleSelect = (eventKey) => {
        const index = selectedItems.indexOf(eventKey);
        if (index === -1) {
            setSelectedItems([...selectedItems, eventKey]);
        } else {
            setSelectedItems(selectedItems.filter(item => item !== eventKey));
        }
    };

    const handleCancel = (item) => {
        setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
    };

    const handleRequest = async () => {
        if (selectedItems.length === 0) {
            alert('Please select at least one ingredient.');
            return;
        }

        const ingredientQuery = selectedItems.join(',');

        try {
            const response = await fetch(`/api/recipes?ingredients=${encodeURIComponent(ingredientQuery)}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Data received:', data.steps);
            setRecipes(data);
        } catch (error) {
            console.error('Failed to fetch recipes:', error);
        }
    };

    console.log('recipes.steps is this kind of thing: ', typeof (recipes.steps))

    return (
        <Container style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <Dropdown onSelect={handleSelect}>
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
                    <h5>Your chosen ingredients:</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {selectedItems.map(item => (
                            <Card key={item} style={{ backgroundColor: '#FEF9EF', width: '150px', margin: '5px' }}>
                                <Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Card.Text>{item}</Card.Text>
                                    <AiOutlineClose style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleCancel(item)} />
                                </Card.Body>
                            </Card>
                        ))}
                        {selectedItems.length === 0 && <p>Please choose your item above.</p>}

                    </div>
                    <Button onClick={handleRequest} variant="primary" style={{ backgroundColor: '#FE6D73', width: '200px', margin: '5px' }}>Let's find the recipes!!!</Button>
                    <Card style={{ width: '50rem', backgroundColor: '#FEF9EF' }}>

                        <Card.Img variant="top" src={recipes.image} />
                        <Card.Body style={{ backgroundColor: '#FEF9EF', textAlign: 'left !important' }}>
                            <Card.Title>{recipes.title}</Card.Title>
                            {/* <Card.Text >{recipes.steps}</Card.Text> */}
                            <ListGroup className="list-group-flush">
                            <ListGroup.Item style={{ backgroundColor: '#FEF9EF', textAlign: 'left !important' }}>{recipes.steps}</ListGroup.Item>
                        </ListGroup>

{/* Should use the iteration method */}

                            {/* <ListGroup className="list-group-flush">
                                {Object.keys(recipes).map(key => (
                                    <ListGroup.Item key={key} className="text-left" style={{ backgroundColor: '#FEF9EF' }}>
                                        {recipes[key]}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup> */}

                        </Card.Body>
                    </Card>
                </div>


                <div>

                </div>
            </div>
        </Container>

    );
}

export default DropdownList;


/*
*  @Reviewer and modifier : Christie Laferriere
* @Last Modified by: christie.laferriere@gmail.com
* @Last Modified time: 2024-04-29 1:30 AM 
* this version allows the front end to make requests to the server which makes requests to the API then the spoonacular database
*/


