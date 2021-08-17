import { useState } from "react";
import React from 'react';
import DeleteModal from "./DeleteModal";
import { connect } from 'react-redux';
import { messageList } from "../../actions";
import lms from "../../api/lms";

const Comment = props =>{
    const [visible,setVisible] = useState(false);

     const deleteComment = async() => {
        await lms.post(
            "/json/learning/deleteMessage",{},
            {
                params:{
                    messageId:props.id
                }
            }
        )
        setVisible(false);
        props.messageList(props.currentId);
     }

    return(
        <div className="comment">
            <div className="avatar">
                <img src="/lms/ajax/images/teach.png" alt=""></img>
            </div>
            <div className="content">
                <span className="author">{props.name}</span>
                <span className="metadata">
                    <div>{props.data}</div>
                </span>
                <div className="text">{props.content}</div>
                <div className="actions">
                    <span onClick={()=>{
                        setVisible(true);
                    }} 
                        style={{cursor:"pointer"}}>
                        删除
                    </span>
                </div>
            </div>
            {visible?
                <DeleteModal 
                    label="删除通知"
                    onPositiveButtonClick={deleteComment}
                    setVisible={setVisible}
                    />
            :null}
        </div>
    )
}

export default connect(null,{messageList})(Comment);