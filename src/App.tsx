import React, {useState} from 'react';
import './App.css';
import Quotes from "./components/Quotes/Quotes";
import {Header} from "./components/Header";
import {Button, Dropdown} from "react-bootstrap";
import SwitchThemeButton from "./components/SwitchThemeButton";

function App() {
    const [darkTheme, setDarkTheme] = useState(false);
    let cl = darkTheme ? "main_window"+" bg-dark" : "main_window";
    return (
        <div className={cl}>
            <Header darkTheme={darkTheme}/>
            <Quotes darkTheme={darkTheme}/>

            <SwitchThemeButton darkTheme={darkTheme} callBack={() => setDarkTheme(!darkTheme)}/>
        </div>
    );

}

export default App;
