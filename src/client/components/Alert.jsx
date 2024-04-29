// import React, { useState } from "react";

// //should pass props from table component as a parent and number of items expiring
// function Alert(props) {
//     const [hide, setHide] = useState(true);
//     function hideName() {
//         if (hide === true) {
//             setHide(false)
//         } else setHide(true);
//     }

//     function count(props.Dates) {
//         const now = new Date(); // will give date at the moment in miliseconds
//         const daysInAdvance = 3 * 24 * 60 * 60 * 1000;
//         let counter = 0;
//         Dates.forEach(date => {
//             const difference = date.getTime() - now.getTime();
//             if (difference <= daysInAdvance) counter += 1;
//         })
//         return counter;
//     }
//     // need function that will iterate through table content
//     // for every iteration should check if val expires within 3 days
//     // if so, increment counter var
//     //return counter
//     return (
//         <div> {
//            hide && <h3> Youh have {count()} items expiring in three days! </h3>
//             }
//             <button onClick={hideName}>Okay</button>
//       </div>  
//     )
// }




// // function count(dates) {
// //     const now = new Date(); // will give date at the moment in miliseconds
// //     console.log(now);
// //     const daysInAdvance = 3 * 24 * 60 * 60 * 1000;
// //     console.log(daysInAdvance);
// //     let counter = 0;
// //    dates.forEach(date => {
// //         const difference = Math.abs( new Date(date.replace(/-/g,'/')) - now)
// //         console.log(difference);
// //         if (difference <= daysInAdvance) counter += 1;
// //     })
// //     return counter;
// // }

// // const dates = ['2024-04-30','2024-05-21','2024-05-11','2024-04-31']

// // const result = count(dates);
// // console.log(result);

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
