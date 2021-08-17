import React from 'react';

const Comment = props =>{

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
                        props.setVisible(true);
                        props.setSelectedId(props.id);
                        }} 
                        style={{cursor:"pointer"}}>
                        删除
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Comment;