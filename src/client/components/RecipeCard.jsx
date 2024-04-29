/*
 * @Author: Peter Gao 
 * @Date: 2024-04-27 08:47:03 
 * @Last Modified by: peter_gao@outlook.com
 * @Last Modified time: 2024-04-29 14:22:11
 */
import React from 'react';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';



const RecipeCard = (props) => {
    let imgUrl;
    // console.log('Recipes type are: ', typeof (recipes))
    console.log('Recipes are: ', props)

    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor: '#FEF9EF' }}>

                {/* <Card.Img variant="top" src={imgUrl} /> */}
                <Card.Body>
                    {/* <Card.Title>{title}</Card.Title> */}
                    <Card.Text>
                        Reminder health app that keeps track of expiration dates and has a recipe book. Healthy food categorization.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                </ListGroup>
                <Card.Body>
                    {/* <Card.Link href="#">{count}</Card.Link> */}
                </Card.Body>
            </Card>
        </div>
    )
}


export default RecipeCard;
