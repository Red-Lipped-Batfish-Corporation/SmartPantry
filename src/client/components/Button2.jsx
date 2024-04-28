import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button2 = ({to}) => {
    const navigate = useNavigate();
    return (
        <button className='recipe-button' onClick={ () =>
            { navigate (`/${to}`)}}>
                Take me to {to === "" ? "Recipes" : to}    
        </button>
    )
}

export default Button2;