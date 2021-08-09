import React from 'react';

const Lessons = () => {
    return(
        <div className="ui five column grid" style={{marginTop:"1.5em"}}>
            <div className="column">
                <a href="http://lms.scutnc.cn/#/learn/course/801/index" >
                    <div className="ui card course">
                        <img src="http://lms.scutnc.cn/lms/custom/icon/1591068988274.jpg"
                            className="ui image" style={{height: "120px"}} alt="" />
                        <div className="content">
                            <p className="card_header">
                                2021年秋季-本科生学习管理
                            </p>
                            <div className="description">
                                <p className="description sentences">
                                    <i arias-hidden="true" className="user icon"></i>
                                    王清华，张开阳，张伟
                                </p>
                            </div>
                            <div className="extra content">
                                <span>2021/7/01~2024/6/30</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Lessons;