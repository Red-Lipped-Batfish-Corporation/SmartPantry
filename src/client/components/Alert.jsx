/*
 * @Author: Christie Laferriere & Nikola  nandelkovic53@gmail.com
 * @Date: 2024-04-28 5:40 pm
 * @Last Modified by: christie.laferriere@gmail.com
 * @Last Modified by Christie Laferriere time: 2024-04-29 1:30 AM 
 * this version contains allows the front end to make get requests to the server which makes requests to the to Mongo  DB
 */

import React, { useState, useEffect } from "react";

function Alert() {
    const [hide, setHide] = useState(true);
    const [expiringItemCount, setExpiringItemCount] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/items/expiring-soon');
                const items = await response.json();
                setExpiringItemCount(items.length);
            } catch (error) {
                console.error('Error fetching item data:', error);
            }
        }

        fetchData();
    }, []);

    const toggleAlert = () => setHide(!hide);

    return (
        <div style={{ textAlign: 'center' }}>
            {!hide && expiringItemCount > 0 && (
                <h3>You have {expiringItemCount} items expiring soon. Click take me to Pantry to see which items!</h3>
            )}
            <button onClick={toggleAlert}>{hide ? 'Show' : 'Hide'} Alert</button>
        </div>  
    );
}

export default Alert;


