import React from 'react';
import Fooster from '../MainPage/footer';
import BreadCrumb from '../MainPage/topHeader/breadcrumb';
import ListBox from '../MainPage/topHeader/listBox';
import history from '../history';
import LessonBar from './LessonBar';
import LessonContent from './LessonContent';
import Detail from './Detail';

const style = {
    backgroundColor:"white",
    boxShadow:"rgba(0, 0, 0, 0.08) 0px 2px 4px 0px",
    height: "56px"
}


const LessonDetail = () => {

    const headerName = () => {
        return (
            <span onClick={()=>{history.push("/lesson/811")}}>/测试作业二</span>
        )
    }

    return(
        <div className="lms-app">
            <div className="ui borderless top fixed menu" style={style}>
                <div className="ui container" 
                style={{display: "flex", justifyContent: "space-between"}}>
                    <BreadCrumb headerName={headerName}/>
                    <ListBox color="black"/>
                </div>
            </div>

            <div className="lms-content">
                <div>
                    <LessonBar/>
                    <div style={{height:"56px"}}></div>
                    <div className="ui container">
                        <LessonContent/>
                        <Detail/>
                    </div>
                </div>
            </div>

            <Fooster/>
        </div>
    )
}

export default LessonDetail;