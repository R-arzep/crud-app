import React from 'react';
import ReactDOM from 'react-dom';
import "tailwindcss/tailwind.css";

import Header from './components/header.jsx'
import SideBar from './components/sideBar.jsx'

const App = () => 
{
    return (

            <div className="grid grid-cols-3">
                <Header img="./pp.jpg" name="Abraham Rivera"/>
                <SideBar/>
            </div>
    );
};

export default App;