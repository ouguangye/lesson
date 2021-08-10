import React from 'react';
import { connect } from 'react-redux';
import Lessons from './lessons';

const renderLessons = (lessons) => {
    if(!lessons) return <Lessons/>;
    console.log(lessons);
    return lessons.map(
        lesson => {
            const photo = lesson.courseImagePath===""
                    ?"/lms/ajax/images/classimg.png"
                    :`/lms/custom/icon/${lesson.courseImagePath}`;

            const teacher = lesson.courseTeacherString === ""
                            ?lesson.courseCreator
                            :`${lesson.courseCreator},${lesson.courseTeacherString}`

            return(
                <Lessons
                    key={lesson.courseId}
                    courseName={lesson.courseName}
                    courseImagePath={photo}
                    teacher = {teacher}
                    startDate={lesson.startDate.substr(0,10)}
                    endDate={lesson.endDate.substr(0,10)}
                />
            )
        }
    )
}

const StudentLesson = ({lessons}) =>{
     return(
         <div className="ui five column grid" style={{marginTop:"1.5em"}}>
             {renderLessons(lessons)}
         </div>
     )
}

const mapStateToProps = (state) => {
    return {lessons:state.lesson.student}
}

export default connect(mapStateToProps)(StudentLesson);