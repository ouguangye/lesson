import React from 'react';
import "./main.css"
import MainPageHeader from './MainPageHeader';
import MainContent from './MainContent';
import Fooster from './footer';

const Main = () =>{
    return(
        <div className="lms-app">
            <MainPageHeader/>
            <MainContent/>
            <Fooster/>
        </div>
    )
} 

export default Main;