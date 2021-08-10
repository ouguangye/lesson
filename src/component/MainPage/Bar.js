import React, { useState } from 'react';
import { connect } from 'react-redux';
import {changeChoice} from "../../actions"

const Bar = props => {
    const[studentLesson,setStudentLesson]=useState("active item");
    const[openLesson,setOpenLesson]=useState("item");

    const onSpanClick = num => {
        const status = studentLesson;
        setStudentLesson(openLesson);
        setOpenLesson(status);
        props.changeChoice(num);
    }

    return(
        <div className="ui borderless menu barMenu" 
        style={{visibility: "visible"}}>
            <span className={studentLesson} onClick={()=>onSpanClick(0)} >
                我学习的课程
            </span>
            <span className={openLesson} onClick={()=>onSpanClick(1)}>
                公开课
            </span>
            <div className="right menu">
                <span className="active item" href="/">正在进行</span>
                <span className="item" href="/">已结束</span>
                <span className="item" href="/">全部</span>
            </div>
        </div>
    )
}

export default connect(null,{changeChoice})(Bar);