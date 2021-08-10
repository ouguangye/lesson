import React from 'react';
import { connect } from 'react-redux';
import LessonCard from './lessonCard';

const renderLessonCard = (lessons) => {
    if(!lessons) return <LessonCard/>;
    return lessons.map(
        lesson => {
            const photo = lesson.courseImagePath===""
                    ?"/lms/ajax/images/classimg.png"
                    :`/lms/custom/icon/${lesson.courseImagePath}`;

            const teacher = lesson.courseTeacherString === ""
                            ?lesson.courseCreator
                            :`${lesson.courseCreator},${lesson.courseTeacherString}`

            return(
                <LessonCard
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

const Lesson = props =>{

    const lessons = props.choice==="0"
                ?props.lessons.student
                :props.lessons.open;

     return(
         <div className="ui five column grid" style={{marginTop:"1.5em"}}>
             {renderLessonCard(lessons)}
         </div>
     )
}

const mapStateToProps = (state) => {
    return {lessons:state.lesson}
}

export default connect(mapStateToProps)(Lesson);