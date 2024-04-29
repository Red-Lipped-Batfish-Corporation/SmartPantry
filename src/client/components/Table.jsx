import { useEffect, useState } from "react";
const Table = () => {
    const [foodItem, setFoodItem] = useState([]);
    const [expirationDates, setExpirationDates] = useState([]);
    useEffect(() => {
        fetch("http:localhost:3000/api/items", {
            method: 'GET'
        }).then(response => response.json())
            .then((food) => {
                console.log('here is food item', foodItem)
                setFoodItem(food)
                // should extract all the expiration dates into array of dates
                const expDates = food.map(item => item.Exp);
                setExpirationDates(expDates);
        }).catch(err => console.log(err))
    }, [])
    return (
        <div> 
            <table>
                <tr>
                    <th>Name of product</th>
                    <th> Expiration date</th>
                    <th> Date of Purchase </th>
                </tr>
                <tbody> 
                    {
                        foodItem.map(val => {// iterate through array
                            // sort it by date of expiration 
                            return <tr key={val._id}>
                                <td> {val.product}</td>
                                <td> {val.Exp}</td>
                                <td> { val.Purchase}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;

/*
 * @Author: Nikola Andelkovic nandelkovic53@gmail.com
 * @Date: 2024-04-27 7:40 pm
 * @Last Modified by:nandelkovic53@gmail.com
 * @Last Modified by Nikola Andelkovic time:  2024-04-27 7:40 pm
 */