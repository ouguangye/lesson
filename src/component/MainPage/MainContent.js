import React from 'react';

const MainContent = () => {
    return (
        <div className="lms-content">
            <div className="ui container">
                <img src="http://lms.scutnc.cn/static/media/bg@2x.4fa27250.png"
                    className="ui image backgroundImage" />
                <div className="ui stuck-container fixed-container"
                    style={{visibility: "hidden"}} >
                        <div style={{height: "150px"}}></div>
                        <div className="ui fixed top sticky"
                            style={{width:"1127px", top:"80px"}} >
                                <div className="user head portrait">
                                    <span className="ui header"
                                        style={{marginLeft:"16px",visibility:"visible"}} >
                                        <img src="http://lms.scutnc.cn/lms/ajax/images/teach.png"
                                            className="ui circular image"
                                            />
                                        <div className="content" style={{color:'white'}}>
                                            欧光业，你好
                                            <div className="sub header" style={{color:'white'}}>名人名言</div>
                                        </div>
                                    </span>
                                    <div className="field">
                                        <button className="ui positive button" 
                                            style={{visibility: "visible"}}>
                                                创建课程
                                        </button>
                                    </div>
                                </div>
                        </div>
                </div>
                <div className="ui five column grid" style={{marginTop:"1.5em"}}>
                    <div className="column"></div>
                </div>
            </div>
        </div>
        )
}

export default MainContent;