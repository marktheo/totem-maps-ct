import React from "react";
import {ReactComponent as Logo} from "./logo.svg";

function Header() {
    const date = new Date();
    const time = date.getDay() + '/' + date.getMonth() + "/" + date.getFullYear()
    
    return (
        <header className="header">
            <Logo className="logo"/>
            <h1>Centro de Tecnologia</h1>
            <h3>{time}</h3>
        </header>
    );
}

export default Header;