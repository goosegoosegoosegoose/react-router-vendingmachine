import React from "react";
import { Link } from "react-router-dom";

const Sardines = () => {
    return (
        <div>
            <h4>YOU DON'T EAT THE SARDINES, THEY EAT YOU!</h4>
            <Link exact to="/">GO BACK</Link>
        </div>
    )
}

export default Sardines;