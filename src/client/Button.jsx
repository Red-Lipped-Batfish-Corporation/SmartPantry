/*
 * @Author: Peter Gao 
 * @Date: 2024-04-27 08:44:50 
 * @Last Modified by:   peter_gao@outlook.com 
 * @Last Modified time: 2024-04-27 08:44:50 
 */
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

            <button onClick={()=> {navigate("/index.html")}}> Pantry </button>
        </div>
    )
}

export default Button;