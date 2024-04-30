/*
 * @Author: Nikola Andelkovic nandelkovic53@gmail.com
 * @Date: 2024-04-27 7:40 pm
 * @Last Modified by:nandelkovic53@gmail.com
 * @Last Modified by Nikola Andelkovic time:  2024-04-27 7:40 pm
 */

import { useEffect, useState } from "react";
import React from 'react';
const Table = () => {
    const [foodItem, setFoodItem] = useState([]);
    const [expirationDates, setExpirationDates] = useState([]);
    useEffect(() => {
        fetch("/api/items", {
            method: 'GET'
        }).then(response => response.json())
            .then((food) => {
                console.log('here is food item', foodItem)
                setFoodItem(food);
        }).catch(err => console.log(err))
    }, [])
    return (
        <div> 
            <table>
                <tr>
                    <th> Name of product</th>
                    <th> Expiration date</th>
                    <th> Date of Purchase </th>
                </tr>
                <tbody> 
                    {
                        foodItem.map(val => {// iterate through array
                            // sort it by date of expiration 
                            return <tr key={val._id}>
                                <td> {val.name}</td>
                                <td> {val.expirationDate}</td>
                                <td> { val.purchaseDate}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;

