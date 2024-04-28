/*
 * @Author: Peter Gao 
 * @Date: 2024-04-27 08:44:50 
 * @Last Modified by:   peter_gao@outlook.com 
 * @Last Modified time: 2024-04-27 08:44:50 
 */
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