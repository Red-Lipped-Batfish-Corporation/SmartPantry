import { Navigate, useState } from 'react-router-dom'

const Button = () => {
    const [goToPantry, setGoToPantry] = useState(false);
    if (goToPantry) {
        return <Navigate to="/ Pantry url here/" />
    }
    return (
        <div>
            <button onClick={()=> {setGoToPantry(true)}}> Pantry </button>
        </div>
    )
}

export default Button;