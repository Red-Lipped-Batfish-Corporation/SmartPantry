import { useState } from "react";
import React from "react";

const Input = () => {
    const [product, setProduct] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [expirationDate, setExpirationDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const addedItem = { product, purchaseDate, expirationDate };
        fetch("post endpoint goes here", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(addedItem)
        }).then(() => console.log('this is new item for the pantry', addedItem))
          .then(() => setProduct(''), setPurchaseDate(''), setExpirationDate(''))
    };

    return (
        <div> 
            <h2> Add to the pantry </h2>
            <form onSubmit={handleSubmit}>
                <label> Item </label>
                <input type="text"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)} />
                <br />
                <label> Purchase Date </label>
                <input type="date"
                    value={purchaseDate}
                    onChange={(e) => setPurchaseDate(e.target.value)} />
                <br />
                <label> Expiration Date </label>
                <input type="date"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)} />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Input;