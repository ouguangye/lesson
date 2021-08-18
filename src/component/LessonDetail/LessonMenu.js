import React,{useState} from 'react';
import DeleteModal from './DeleteModal';
import history from '../history';
import lms from '../../api/lms';

/*const showLessonModal = () => {
    if(lessonVisible) return (
        <LessonModal 
            setVisible={setLessonVisible}
            href={`/lesson/${id}`}
            />
        )
}*/

const LessonMenu = props => {

    const [visible,setVisible] = useState(false);

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
            >
                <p>编辑课程</p>
            </div>
            <div role="option" className="item" aria-selected="false">
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
        </React.Fragment>
    )
}

export default LessonMenu;