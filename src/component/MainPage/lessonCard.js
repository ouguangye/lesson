import React from 'react';

const LessonCard = props => {
    return(
        <div className="column">
            <a href={`http://lms.scutnc.cn/#/learn/course/${props.id}/index`} >
                <div className="ui special card" style={{height:"270px"}}>
                    <img src={props.courseImagePath}
                        className="ui image" style={{height: "120px"}} alt="" />
                    <div className="content">
                        <p className="card header" style={{textAlign:"center"}}>
                            {props.courseName}
                        </p>
                        <br></br>
                        <div className="description">
                            <p className="description sentences">
                                <i arias-hidden="true" className="user icon"></i>
                               {props.teacher}
                            </p>
                        </div>
                        <br></br>
                        <div className="extra content">
                            <span style={{color:"grey",opacity:"0.7"}} className="data">
                                {`${props.startDate}~${props.endDate}`}
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default LessonCard;