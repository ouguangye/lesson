import React, { useEffect, useState } from 'react';
import Fooster from '../MainPage/footer';
import BreadCrumb from '../MainPage/topHeader/breadcrumb';
import ListBox from '../MainPage/topHeader/listBox';
import history from '../history';
import LessonBar from './LessonBar';
import LessonContent from './LessonContent';
import Detail from './Detail';
import DeleteModal from './DeleteModal';
import LessonModal from '../createLessons/LessonModal';
import { connect } from 'react-redux';
import { courseDetail,teachList,messageList } from "../../actions";


const style = {
    backgroundColor:"white",
    boxShadow:"rgba(0, 0, 0, 0.08) 0px 2px 4px 0px",
    height: "56px"
}

const LessonDetail = props => {

    const id = props.match.params.id;
    const { courseDetail,teachList,messageList } = props;
    const [visible,setVisible] = useState(false);
    const [lessonVisible,setLessonVisible] = useState(false);
    const [selectedId,setSelectedId]=useState(0);

    useEffect(()=>{
        courseDetail(id);
        teachList(id);
        messageList(id);
    },[id,courseDetail,teachList,messageList])

    const headerName = () => {
        if(!props.data) return;
        return (
            <span onClick={()=>{history.push(`/lesson/${id}`)}}>
                /{props.data.name}
            </span>
        )
    }
    
   const showModal = () => {
       if(visible) return (
            <DeleteModal 
                setVisible={setVisible} 
                id={selectedId}
                currentId = {id}
       />)   }

    const showLessonModal = () => {
        if(lessonVisible) return <LessonModal setVisible={setLessonVisible}/>
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
                        <LessonContent setLessonVisible={setLessonVisible}/>
                        <Detail 
                            currentId = {id}
                            setVisible = {setVisible} 
                            setSelectedId = {setSelectedId}
                        />
                    </div>
                </div>
            </div>
            <Fooster/>
            {showModal()}
            {showLessonModal()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data:state.detail.data
    }
}

export default connect(mapStateToProps,{
    courseDetail,
    teachList,
    messageList})(LessonDetail);