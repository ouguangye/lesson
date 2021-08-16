const LessonBar = () => {
    return (
        <div className="ui stuck-container fixed-container" 
            style={{height:"56px",zIndex:"1",position:"relative"}}>
            <div style={{height:"58px"}}></div>
            <div className="ui fixed top sticky" style={{width:"1263px",top:"56px"}}>
                <div className="ui pointing secondary menu"
                   style={{boxShadow:"rgba(0, 0, 0, 0.09) 1px 1px",
                        background:"white",marginBottom:"1em"}} >
                    <div className="ui container">
                        <div className="active item">
                            <span style={{color:"rgb(51, 37, 174)"}}>
                                课程信息
                            </span>
                        </div>
                        <div className="item">
                            <span style={{color:"black"}}>提交</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LessonBar;