import React,{useState} from 'react';
import DeleteModal from './DeleteModal';
import history from '../history';
import lms from '../../api/lms';
import LessonModal from '../createLessons/LessonModal';
import { connect } from 'react-redux';

const LessonMenu = props => {

    const [visible,setVisible] = useState(false);
    const [lessonVisible,setLessonVisible] = useState(false);

    const showLessonModal = () =>{
        if(!lessonVisible)return;
        return (
            <LessonModal
                setVisible={setLessonVisible} 
                href={`/lesson/${props.id}`}
                name={props.data.name}
                startDate={props.data.startDate}
                endDate={props.data.endDate}
                hour=""
                credit={props.data.credit}
            />
        )
    }
    //console.log(props.data.name);
    const deleteModal = () =>{
        if(!visible)return;
        return (
            <DeleteModal 
                label="删除该课程"
                onPositiveButtonClick={deleteLesson}
                setVisible={setVisible}
            />
        )
    }

    const deleteLesson = async() => {
        await lms.post(
            "/json/creator/deleteCourse",{},
            {
                params:{
                    courseId:props.id
                }
            }
        )
        history.push("/main");
    }

    return (
        <React.Fragment>
            <div 
                role="option" 
                className="item" 
                aria-selected="false"
                onClick={()=>{setLessonVisible(true)}}
            >
                <p>编辑课程</p>
            </div>
            <div 
                role="option" 
                className="item" 
                aria-selected="false"
                onClick={()=>{setLessonVisible(true)}}
            >
                <p>复制课程</p>
            </div>
            <div 
                role="option" 
                className="item" 
                aria-selected="false"
                onClick={()=>{setVisible(true)}}
            >
                <p style={{textAlign:"center",color:"red"}}>
                    删除
                </p>
            </div>
            {deleteModal()}
            {showLessonModal()}
        </React.Fragment>
    )
}

const mapStateToProps = state =>{
    return {
        data:state.detail.data
    }
}

export default connect(mapStateToProps)(LessonMenu);