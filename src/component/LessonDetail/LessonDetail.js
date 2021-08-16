import React, { useEffect } from 'react';
import Fooster from '../MainPage/footer';
import BreadCrumb from '../MainPage/topHeader/breadcrumb';
import ListBox from '../MainPage/topHeader/listBox';
import history from '../history';
import LessonBar from './LessonBar';
import LessonContent from './LessonContent';
import Detail from './Detail';
import { connect } from 'react-redux';
import { courseDetail,teachList } from "../../actions";

const style = {
    backgroundColor:"white",
    boxShadow:"rgba(0, 0, 0, 0.08) 0px 2px 4px 0px",
    height: "56px"
}

const LessonDetail = props => {
    const id = props.match.params.id;

    const headerName = () => {
        return (
            <span onClick={()=>{history.push(`/lesson/${id}`)}}>/测试作业二</span>
        )
    }
    
    const { courseDetail,teachList } = props;

    useEffect(()=>{
        courseDetail(id);
        teachList(id);
    },[id,courseDetail,teachList])

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

export default connect(null,{courseDetail,teachList})(LessonDetail);