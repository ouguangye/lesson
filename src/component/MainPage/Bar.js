import React, { useState } from 'react';
import { connect } from 'react-redux';
import {changeChoice,lessonsFetch} from "../../actions"

const Bar = props => {

    const [onDate,setOnDate] = useState("active item");
    const [outDate,setOutDate] = useState("item");
    const [allDate,setAllDate] = useState("item");


    const onSpanDateClick = (num,type) => {
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
        if(type)props.lessonsFetch(num);
        else  props.changeChoice(num);
    }

    return(
        <div className="ui borderless menu barMenu" 
        style={{visibility: "visible"}}>
            <span className={onDate} onClick={()=>onSpanDateClick(1,0)} >
                我教的课程
            </span>
            <span className={outDate} onClick={()=>onSpanDateClick(2,0)} >
                我学习的课程
            </span>
            <span className={allDate} onClick={()=>onSpanDateClick(0,0)}>
                公开课
            </span>
            <div className="right menu">
                <span className={onDate} 
                    onClick={()=>onSpanDateClick(1,1)}>
                    正在进行
                </span>
                <span className={outDate} onClick={()=>onSpanDateClick(2,1)}>已结束</span>
                <span className={allDate} onClick={()=>onSpanDateClick(0,1)}>全部</span>
            </div>
        </div>
    )
}

export default connect(null,{changeChoice,lessonsFetch})(Bar);