/*
 * @Author: Peter Gao 
 * @Date: 2024-04-27 08:47:03 
 * @Last Modified by: peter_gao@outlook.com
 * @Last Modified time: 2024-04-28 22:57:42
 */
import React from 'react';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';



const RecipeCard = (props) => {
    const recipe = props.recipes;

    const imgUrl = recipe.image;
    console.log(imgUrl)
    const count = recipe.missedIngredientCount;
    const title = recipe.title;


    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor: '#FEF9EF' }}>

                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Reminder health app that keeps track of expiration dates and has a recipe book. Healthy food categorization.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{props.item1}</ListGroup.Item>
                    <ListGroup.Item>{props.item2}</ListGroup.Item>
                    <ListGroup.Item>{props.item3}</ListGroup.Item>
                    <ListGroup.Item>{props.item4}</ListGroup.Item>

                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">{count}</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}


export default RecipeCard;
