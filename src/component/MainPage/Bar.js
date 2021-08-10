import React, { useState } from 'react';
import { connect } from 'react-redux';
import {changeChoice,lessonsFetch} from "../../actions"

const Bar = props => {
    const[studentLesson,setStudentLesson] = useState("active item");
    const[openLesson,setOpenLesson] = useState("item");

    const [onDate,setOnDate] = useState("active item");
    const [outDate,setOutDate] = useState("item");
    const [allDate,setAllDate] = useState("item");

    const onSpanClick = num => {
        const status = studentLesson;
        setStudentLesson(openLesson);
        setOpenLesson(status);
        props.changeChoice(num);
    }

    const onSpanDateClick = num => {
        switch(num){
            case 1: {
                setOnDate("active item");
                setOutDate("item");
                setAllDate("item");
                break;
            }
            case 2: {
                setOnDate("item");
                setOutDate("active item");
                setAllDate("item");
                break;
            }
            case 0:{
                setOnDate("item");
                setOutDate("item");
                setAllDate("active item");
                break;
            }
            default: break;
        }
        props.lessonsFetch(num);
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
                <span className={onDate} 
                    onClick={()=>onSpanDateClick(1)}>
                    正在进行
                </span>
                <span className={outDate} onClick={()=>onSpanDateClick(2)}>已结束</span>
                <span className={allDate} onClick={()=>onSpanDateClick(0)}>全部</span>
            </div>
        </div>
    )
}

export default connect(null,{changeChoice,lessonsFetch})(Bar);