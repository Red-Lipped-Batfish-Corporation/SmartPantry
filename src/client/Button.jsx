import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {
    // const [goToPantry, setGoToPantry] = useState(false);
    const navigate = useNavigate();
    // if (goToPantry) {
    //     return <Navigate to="/ Pantry url here/" />
    // }
    return (
        <div>

            <button onClick={()=> {navigate("pantry.html")}}> Pantry </button>
        </div>
    )
}

export default Button;