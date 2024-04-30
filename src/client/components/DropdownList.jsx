/*
 * @Author: Peter Gao  & Christie laferriere
 * @Date: 2024-04-27 15:38:27 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-04-30 02:10:56
 */

import React, { useState } from 'react';
import { Dropdown, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { AiOutlineClose } from "react-icons/ai";
import { ListGroup } from 'react-bootstrap';

function DropdownList() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [recipes, setRecipes] = useState({});


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
            setRecipes(data);
        } catch (error) {
            console.error('Failed to fetch recipes:', error);
        }
    };

    return (
        <Container style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ backgroundColor: '#17C3B2' }}>
                        Choose the ingredient from your grocery list:
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="Tomato">Tomato</Dropdown.Item>
                        <Dropdown.Item eventKey="Egg">Eggs</Dropdown.Item>
                        <Dropdown.Item eventKey="Chicken">Chicken</Dropdown.Item>
                        <Dropdown.Item eventKey="Pork">Pork</Dropdown.Item>
                        <Dropdown.Item eventKey="Fish">Fish</Dropdown.Item>
                        <Dropdown.Item eventKey="Broccoli">Chicken</Dropdown.Item>
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
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item style={{ backgroundColor: '#FEF9EF', textAlign: 'left !important' }}>{recipes.steps}</ListGroup.Item>
                            </ListGroup>

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


