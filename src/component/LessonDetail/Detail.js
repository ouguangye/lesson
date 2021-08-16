import Comment from "./Comment";
import ReplyForm from "./ReplyForm";

const style = {
    fontSize:"16px", 
    lineHeight:"40px",
    background:"white",
    padding:"8px",
    marginTop: "8px", 
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 2px 4px 0px",
    borderRadius:"8px"
}

const Detail = () => {
    return(
        <div className="ui grid">
            <div className="twelve wide column">

                <div className="accordion ui fluid styled" 
                  style={{background:"transparent"}}>

                    <div className="title ellipsis" style={style}>
                        <i aria-hidden="true" className="dropdown icon"></i>
                        第一章xxx
                    </div>

                    <div className="content" 
                        style={{background:"white",borderRadius:"0px 0px 8px 8px"}}>
                        <div style={{marginLeft: "16px"}}>

                        <button className="ui orange basic button">
                            <i aria-hidden="true" className="tv icon"></i>
                            创建教学元素
                        </button>

                        <button className="ui orange basic button">
                            <i aria-hidden="true" className="pencil icon"></i>
                            创建作业
                        </button>

                        <button className="ui orange basic button">
                            <i aria-hidden="true" className="lab icon"></i>
                            团队实验
                        </button>

                        </div>
                    </div>

                </div>

                <div className="ui segment" 
                    style={{
                        background:"transparent",
                        border:"1px dashed rgb(65, 131, 196)",
                        marginBottom: "8px",
                        color:"rgb(65, 131, 196)",
                        cursor:"pointer"}}>
                    <i aria-hidden="true" className="add icon"></i>
                    创建章节
                </div>
            </div>

            <div className="four wide column">
                <div className="ui container">
                    <div className="ui small minimal comments"
                        style={{marginTop:"8px"}}>
                        <h3 className="ui dividing header">课程通知</h3>
                        <Comment/>
                        <ReplyForm/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Detail;