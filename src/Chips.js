import React, {useState} from "react";
import { Link } from "react-router-dom";

const Chips = () => {
    const [eaten, setEaten] = useState(0);

    const eat = () => {
        setEaten(eaten + 1);
    };

    return (
        <div>
            <h4>BAGS EATEN: {eaten}</h4>
            <button onClick={eat}>NOM NOM NOM</button><br/><br/>
            <Link exact to="/">GO BACK</Link>
        </div>
    )
}

export default Chips;