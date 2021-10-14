import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";

const VendingMachine = () => {
    return (
        <BrowserRouter>
            <Route exact path ="/soda">
                <Soda />
            </Route>
            <Route exact path ="/chips">
                <Chips />
            </Route>
            <Route exact path ="/sardines">
                <Sardines />
            </Route>
            <Route exact path ="/">
                <div>
                    <Link exact to="/soda">Soda</Link><br/>
                    <Link exact to="/chips">Chips</Link><br/>
                    <Link exact to="/sardines">Fresh Sardines</Link><br/>
                </div>
            </Route>
        </BrowserRouter>
    );
}

export default VendingMachine;