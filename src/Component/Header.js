import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";


import Menu from "./Menu";

const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <div className="clearfix">
                    <Toolbar>
                        <div className="logo">
                            <h2>Logo</h2>
                        </div>
                        <div className="menu-area">
                            <Menu />
                        </div>
                    </Toolbar>
                </div>
            </AppBar>
        </div>
    )
}


export default Header;