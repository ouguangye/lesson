import React from 'react';
import "./main.css"
import MainPageHeader from './MainPageHeader';
import MainContent from './MainContent';
import Fooster from './footer';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {dataRequest,lessonsFetch,changeChoice} from '../../actions'

const Main = props =>{

    const {dataRequest,lessonsFetch,changeChoice} = props;

    useEffect(()=>{
        dataRequest();
        lessonsFetch(1);
        changeChoice(1);
    },[dataRequest,lessonsFetch,changeChoice])

    return(
        <div className="lms-app">
            <MainPageHeader/>
            <MainContent/>
            <Fooster/>
        </div>
    )
} 

export default connect(null,{dataRequest,lessonsFetch,changeChoice})(Main);