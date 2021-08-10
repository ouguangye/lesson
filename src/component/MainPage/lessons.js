import React from 'react';

const Lessons = props => {
    return(
        <div className="ui five column grid" style={{marginTop:"1.5em"}}>
            <div className="column">
                <a href="/#/learn/course/801/index" >
                    <div className="ui card course">
                        <img src={props.courseImagePath}
                            className="ui image" style={{height: "120px"}} alt="" />
                        <div className="content">
                            <p className="card_header">
                                {props.courseName}
                            </p>
                            <div className="description">
                                <p className="description sentences">
                                    <i arias-hidden="true" className="user icon"></i>
                                    {`${props.courseCreator},${props.courseTeacherString}`}
                                </p>
                            </div>
                            <div className="extra content">
                                <span style={{color:"grey",opacity:"0.7"}}>
                                    {`${props.startDate}~${props.endDate}`}
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Lessons;