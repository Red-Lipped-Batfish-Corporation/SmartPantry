import React, { useState } from "react";

//should pass props from table component as a parent and number of items expiring
function Alert(props) {
    const [hide, setHide] = useState(true);
    function hideName() {
        if (hide === true) {
            setHide(false)
        } else setHide(true);
    }

    function count(props.Dates) {
        const now = new Date(); // will give date at the moment in miliseconds
        const daysInAdvance = 3 * 24 * 60 * 60 * 1000;
        let counter = 0;
        Dates.forEach(date => {
            const difference = date.getTime() - now.getTime();
            if (difference <= daysInAdvance) counter += 1;
        })
        return counter;
    }
    // need function that will iterate through table content
    // for every iteration should check if val expires within 3 days
    // if so, increment counter var
    //return counter
    return (
        <div> {
           hide && <h3> Youh have {count()} items expiring in three days! </h3>
            }
            <button onClick={hideName}>Okay</button>
      </div>  
    )
}