import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Menu = () =>{
    return(
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/swap">Swap</Link>
            <Link to="/state">State</Link>
        </div>
    )
}


export default Menu;