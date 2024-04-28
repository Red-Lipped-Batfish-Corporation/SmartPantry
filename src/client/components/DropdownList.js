/*
 * @Author: Peter Gao 
 * @Date: 2024-04-27 15:38:27 
 * @Last Modified by: peter_gao@outlook.com
 * @Last Modified time: 2024-04-27 17:00:38
 */

import React, { useState } from 'react';
import { Dropdown, Button, Card } from 'react-bootstrap';
import { AiOutlineClose } from "react-icons/ai";


function DropdownExample() {
    // track the state of the selection
    const [selectedItems, setSelectedItems] = useState([]);

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

    return (
        <div>
            {/* Dropdown list */}
            <Dropdown onSelect={handleSelect} style={{ backgroundColor: '#FFCB77' }}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ backgroundColor: '#17C3B2' }}>
                    Options:
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="item1">Item 1</Dropdown.Item>
                    <Dropdown.Item eventKey="item2">Item 2</Dropdown.Item>
                    <Dropdown.Item eventKey="item3">Item 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div>
                <h4>Your chose: </h4>
                {/* Iterate the selected items and show them in the card */}
                {selectedItems.map(item => (
                    <Card key={item} style={{ backgroundColor: '#FEF9EF', width: '200px', margin: '5px', display: 'flex', justifyContent: 'space-between' }}>
                        <Card.Body>
                            <Card.Text>{item}</Card.Text>
                            {/* <Button variant="danger" onClick={() => handleCancel(item)}>取消选择</Button> */}
                            <AiOutlineClose style={{ color: 'red', cursor: 'pointer', marginRight: '10px' }} onClick={() => handleCancel(item)} />
                        </Card.Body>
                    </Card>
                ))}
                {/* If no chose, show some hint */}
                {selectedItems.length === 0 && <p>Please choose your item above.</p>}
            </div>
        </div >
    );
}

export default DropdownExample;
