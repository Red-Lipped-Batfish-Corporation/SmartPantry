/*
 * @Author: Peter Gao 
 * @Date: 2024-04-27 08:47:03 
 * @Last Modified by: peter_gao@outlook.com
 * @Last Modified time: 2024-04-27 13:43:15
 */
import React from 'react';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


// import { useEffect } from 'react';





export const RecipeCard = () => {




    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '52eb7a0445msh8633c554a4e63d1p1f4076jsn2326a63243dd',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    try {
        const response = fetch(url, options);
        const result = response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://duet-cdn.vox-cdn.com/thumbor/0x0:1280x938/1200x800/filters:focal(640x469:641x470):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/15835620/red-lipped-batfish.0.0.1465399406.jpg" />
                <Card.Body>
                    <Card.Title>Sheet Pan Garlic Butter Steak Bites with Veggies</Card.Title>
                    <Card.Text>
                        Reminder health app that keeps track of expiration dates and has a recipe book. Healthy food categorization.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>1 pound tiny new red and/or yellow potatoes, halved</ListGroup.Item>
                    <ListGroup.Item>12 ounces green beans, trimmed</ListGroup.Item>
                    <ListGroup.Item>1 small red onion, cut into 1-inch wedgess</ListGroup.Item>
                    <ListGroup.Item>2 tablespoons olive oil, divided</ListGroup.Item>
                    <ListGroup.Item>3/4 teaspoon kosher salt, divided</ListGroup.Item>
                    <ListGroup.Item>1/2 teaspoon black pepper, divided</ListGroup.Item>
                </ListGroup>
                <Card.Body>

                    <Button variant="primary">Primary</Button>{' '}
                    <Button variant="secondary">Secondary</Button>{' '}
                    <Button variant="success">Success</Button>{' '}
                    <Button variant="warning">Warning</Button>{' '}
                    <Button variant="danger">Danger</Button>{' '}
                    <Button variant="info">Info</Button>{' '}
                    <Button variant="light">Light</Button>{' '}
                    <Button variant="dark">Dark</Button>
                    <Button variant="link">Link</Button>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}
