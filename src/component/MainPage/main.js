import React from 'react';
import "./main.css"
import MainPageHeader from './MainPageHeader';
import Fooster from './footer';

const Main = () =>{
    return(
        <div className="lms-app">
            <MainPageHeader/>
            <Fooster/>
        </div>
    )
} 

export default Main;