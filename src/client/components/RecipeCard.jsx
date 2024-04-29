/*
 * @Author: Peter Gao 
 * @Date: 2024-04-27 08:47:03 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-04-29 14:13:52
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
    // console.log('recipes.recipes type  are: ', typeof (recipes.recipes))
    // console.log('The raw data is: ', recipes.image)

    // const count = props.missedIngredientCount;
    // const title = props.title;
    // const instruction = props.analyzedInstructions;
    // useEffect(() => {
    //     imgUrl = props.image;
    //     console.log('Img url: ', imgUrl)
    //     console.log('Props title: ', props.title);

    // }, [props.image])
    // console.log(recipes[1]);
    // console.log('Recipe data:', recipe)
    // console.log(recipe.extendedIngredients.image)
    // console.log(props.recipes.aggregateLikes)





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
                    {/* <ListGroup.Item>{props.item1}</ListGroup.Item>
                    <ListGroup.Item>{props.item2}</ListGroup.Item>
                    <ListGroup.Item>{props.item3}</ListGroup.Item>
                    <ListGroup.Item>{props.item4}</ListGroup.Item> */}

                </ListGroup>
                <Card.Body>
                    {/* <Card.Link href="#">{count}</Card.Link> */}
                </Card.Body>
            </Card>
        </div>
    )
}


export default RecipeCard;
