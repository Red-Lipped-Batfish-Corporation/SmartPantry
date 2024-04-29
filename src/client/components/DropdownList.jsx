/*
 * @Author: Peter Gao  & Christie laferriere
 * @Date: 2024-04-27 15:38:27 
 * @Last Modified by: peter_gao@outlook.com
 * @Last Modified time: 2024-04-28 07:56:42
 */

// import React, { useState } from 'react';
// import { Dropdown, Button, Card } from 'react-bootstrap';
// import { AiOutlineClose } from "react-icons/ai";


// function DropdownExample() {
//     // track the state of the selection
//     const [selectedItems, setSelectedItems] = useState([]);

//     // handle select
//     const handleSelect = (eventKey) => {
//         const index = selectedItems.indexOf(eventKey);
//         if (index === -1) {
//             // if user select one item, add this to array
//             setSelectedItems([...selectedItems, eventKey]);
//         } else {
//             // if user cancel the selection, pop this item from the array
//             setSelectedItems(selectedItems.filter(item => item !== eventKey));
//         }
//     };

//     // Cancel selection
//     const handleCancel = (item) => {
//         setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
//     };

//     // Request the recipe
//     const handleRequest = (arr) => {

//     }

//     return (
//         <div>
//             {/* Dropdown list */}
//             <Dropdown onSelect={handleSelect} style={{ backgroundColor: 'white' }}>
//                 <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ backgroundColor: '#17C3B2' }}>
//                     Choose the ingredient from your grocery list:
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                     <Dropdown.Item eventKey="Tomato">Tomato</Dropdown.Item>
//                     <Dropdown.Item eventKey="Eggs">Eggs</Dropdown.Item>
//                     <Dropdown.Item eventKey="Chicken">Chicken</Dropdown.Item>
//                 </Dropdown.Menu>
//             </Dropdown>

//             <div>
//                 <h4>Your chose: </h4>
//                 {/* Iterate the selected items and show them in the card */}
//                 {selectedItems.map(item => (
//                     <Card key={item} style={{ backgroundColor: '#FEF9EF', width: '200px', margin: '5px', display: 'flex', justifyContent: 'space-between' }}>
//                         <Card.Body>
//                             <Card.Text>{item}</Card.Text>
//                             {/* <Button variant="danger" onClick={() => handleCancel(item)}>取消选择</Button> */}
//                             <AiOutlineClose style={{ color: 'red', cursor: 'pointer', marginRight: '10px' }} onClick={() => handleCancel(item)} />
//                         </Card.Body>
//                     </Card>
//                 ))}
//                 {/* If no chose, show some hint */}
//                 {selectedItems.length === 0 && <p>Please choose your item above.</p>}

//                 {/* If user selected the ingredients, they should click "Give me the recipe" Button */}
//                 <Button variant="primary" onClick={handleRequest} style={{ backgroundColor: '#FE6D73', width: '200px', margin: '5px' }}>Let's find the recipes!!! </Button>{' '}


//             </div>
//         </div >
//     );
// }

// export default DropdownExample;

//

import React, { useState } from 'react';
import { Dropdown, Button, Card } from 'react-bootstrap';
import { AiOutlineClose } from "react-icons/ai";

function DropdownExample() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [recipes, setRecipes] = useState([]); 

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
            setRecipes(data.recipes || []); 
        } catch (error) {
            console.error('Failed to fetch recipes:', error);
        }
    };

    return (
        <div>
            <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ backgroundColor: '#17C3B2' }}>
                    Choose the ingredient from your grocery list:
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="Tomato">Tomato</Dropdown.Item>
                    <Dropdown.Item eventKey="Eggs">Eggs</Dropdown.Item>
                    <Dropdown.Item eventKey="Chicken">Chicken</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div>
                <h4>Your chosen ingredients:</h4>
                {selectedItems.map(item => (
                    <Card key={item} style={{ backgroundColor: '#FEF9EF', width: '200px', margin: '5px', display: 'flex', justifyContent: 'space-between' }}>
                        <Card.Body>
                            <Card.Text>{item}</Card.Text>
                            <AiOutlineClose style={{ color: 'red', cursor: 'pointer', marginRight: '10px' }} onClick={() => handleCancel(item)} />
                        </Card.Body>
                    </Card>
                ))}
                {selectedItems.length === 0 && <p>Please choose your item above.</p>}
                <Button onClick={handleRequest} variant="primary" style={{ backgroundColor: '#FE6D73', width: '200px', margin: '5px' }}>Let's find the recipes!!!</Button>
            </div>
            
            <div>
                {recipes.map(recipe => (
                    <Card key={recipe.id}>
                        <Card.Body>
                            <Card.Title>{recipe.title}</Card.Title>
                            <Card.Text>{recipe.summary}</Card.Text>
                            <Button href={recipe.url}>View Recipe</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default DropdownExample;


/*
*  @Reviewer and modifier : Christie Laferriere
* @Last Modified by: christie.laferriere@gmail.com
* @Last Modified time: 2024-04-29 1:30 AM 
* this version allows the front end to make requests to the server which makes requests to the API then the spoonacular database
*/


