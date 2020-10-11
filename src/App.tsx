import React, {useEffect, useState} from 'react';
import './App.css';
import Quotes from "./components/Quotes/Quotes";
import {Header} from "./components/Header";
import SwitchThemeButton from "./components/SwitchThemeButton";

function App() {
    const [darkTheme, setDarkTheme] = useState(false);
    useEffect(() => {
        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', 'light');
        }
        if (localStorage.getItem('theme') === "dark") {
            setDarkTheme(true);
        }
    }, []);


    const changeTheme = () => {

        if (darkTheme) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
        setDarkTheme(!darkTheme);
    };
    let cl = darkTheme ? "main_window" + " bg-dark" : "main_window";
    let bd = document.body;
    bd.className = darkTheme ? "bg-dark" : "";
    return (
        <div className={cl}>
            <Header darkTheme={darkTheme}/>
            <Quotes darkTheme={darkTheme}/>

            <SwitchThemeButton darkTheme={darkTheme} callBack={changeTheme}/>
        </div>
    );

}

export default App;
