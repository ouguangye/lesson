import React, { useState } from 'react';
import { connect } from 'react-redux';
import {changeChoice,lessonsFetch} from "../../../actions"

const Bar = props => {

    const [teach,setTeach] = useState("active item");
    const [study,setStudy] = useState("item");
    const [open,setOpen] = useState("item");

    const [onDate,setOnDate] = useState("active item");
    const [outDate,setOutDate] = useState("item");
    const [allDate,setAllDate] = useState("item");


    const onSpanDateClick = (num) => {
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

    const onSpanClick = (num) => {
        switch(num){
            case 1: {
                setTeach("active item");
                setStudy("item");
                setOpen("item");
                break;
            }
            case 2: {
                setTeach("item");
                setStudy("active item");
                setOpen("item");
                break;
            }
            case 0:{
                setTeach("item");
                setStudy("item");
                setOpen("active item");
                break;
            }
            default: break;
        }
        props.changeChoice(num);
    }

    return(
        <div className="ui borderless menu barMenu" 
        style={{visibility: "visible"}}>
            <span className={teach} onClick={()=>onSpanClick(1)} >
                我教的课程
            </span>
            <span className={study} onClick={()=>onSpanClick(2)} >
                我学习的课程
            </span>
            <span className={open} onClick={()=>onSpanClick(0)}>
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