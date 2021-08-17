import React, { useState } from 'react';
import lms from '../../api/lms';
import { connect } from 'react-redux';
import { messageList } from "../../actions"

const ReplyForm = props => {
    const [comment,setComment] = useState(""); 

    const onButtonClick = async (e) => {
        e.preventDefault();
        await lms.post(
            "/json/learning/saveMessage",{},
            {
                params:{
                    courseId:props.currentId,
                    content:comment
                }
            }
        )
        setComment("");
        props.messageList(props.currentId);
    }
   console.log(comment);
    return(
        <form className="ui reply form">
            <div className="field">
                <textarea 
                    placeholder="请老师在这里发布课程的通知" 
                    rows="3"
                    value={comment}
                    onChange={e=>setComment(e.target.value)}
                    />
            </div>
            <div className="field">
                <button 
                    className="ui icon primary right floated left labeled button"
                    onClick={(e)=>{onButtonClick(e)}}
                    >
                    <i aria-hidden="true" className="edit icon"></i>
                    发布通知
                </button>
            </div>
        </form>
    )
}

export default connect(null,{messageList})(ReplyForm);