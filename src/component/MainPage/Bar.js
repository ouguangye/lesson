import React from 'react';

const Bar = () => {
    return(
        <div className="ui borderless menu barMenu" 
        style={{visibility: "visible"}}>
            <a className="active item">
                我学习的课程
            </a>
            <a className="item">
                公开课
            </a>
            <div className="right menu">
                <a className="active item">正在进行</a>
                <a className="item">已结束</a>
                <a className="item">全部</a>
            </div>
        </div>
    )
}

export default Bar;