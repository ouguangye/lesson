import React from 'react';

const Bar = () => {

    return(
        <div className="ui borderless menu barMenu" 
        style={{visibility: "visible"}}>
            <span className="active item">
                我学习的课程
            </span>
            <span className="item">
                公开课
            </span>
            <div className="right menu">
                <span className="active item" href="/">正在进行</span>
                <span className="item" href="/">已结束</span>
                <span className="item" href="/">全部</span>
            </div>
        </div>
    )
}

export default Bar;