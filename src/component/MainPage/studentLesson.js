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

            return(
                <Lessons
                    key={lesson.courseId}
                    courseName={lesson.courseName}
                    courseTeacherString={lesson.courseTeacherString}
                    courseCreator={lesson.courseCreator}
                    courseImagePath={photo}
                    startDate={lesson.startDate}
                    endDate={lesson.endDate}
                />
            )
        }
    )
}

const StudentLesson = ({lessons}) =>{
     return(
         <div >
             {renderLessons(lessons)}
         </div>
     )
}

const mapStateToProps = (state) => {
    return {lessons:state.lesson.student}
}

export default connect(mapStateToProps)(StudentLesson);