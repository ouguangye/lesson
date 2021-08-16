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
                </div>
            </div>

            <div className="four wide column">
                <div className="ui container">
                    <div className="ui small minimal comments"
                        style={{marginTop:"8px"}}>
                        <h3 className="ui dividing header">课程通知</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Detail;