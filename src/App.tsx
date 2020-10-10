import React from 'react';
import './App.css';
import Quotes from "./components/Quotes/Quotes";
import {Header} from "./components/Header";

function App() {
    return (
        <div>
            <Header/>
            <Quotes/>
        </div>
    );

}

export default App;
