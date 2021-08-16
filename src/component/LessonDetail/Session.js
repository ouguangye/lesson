const style = {
    fontSize:"16px", 
    lineHeight:"40px",
    background:"white",
    padding:"8px",
    marginTop: "8px", 
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 2px 4px 0px",
    borderRadius:"8px"
}

const Session = props => {
    return(
        <div className="accordion ui fluid styled" 
        style={{background:"transparent"}}>

          <div className="title ellipsis" style={style}>
              <i aria-hidden="true" className="dropdown icon"></i>
              {props.name}
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
    )
}

export default Session;