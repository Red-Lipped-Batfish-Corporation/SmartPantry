import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({to}) => {
    // const [goToPantry, setGoToPantry] = useState(false);
    const navigate = useNavigate();
    // if (goToPantry) {
    //     return <Navigate to="/ Pantry url here/" />
    // }
    return (
        <button className='pantry-button' onClick={ () =>
            { navigate (`/${to}`)}}>
                Take me to {to === "" ? "pantry" : to}    
        </button>
    )
}

export default Button;