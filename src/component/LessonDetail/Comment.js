const Comment = () =>{
    return(
        <div className="comment">
            <div className="avatar">
                <img src="/lms/ajax/images/teach.png"></img>
            </div>
            <div className="content">
                <span className="author">欧光业</span>
                <span className="metadata">
                    <div>2021-08-16 16:48:30</div>
                </span>
                <div className="text">请同学们尽快完成任务</div>
                <div className="actions">
                    <span>删除</span>
                </div>
            </div>
        </div>
    )
}

export default Comment;