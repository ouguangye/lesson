import React from 'react';
import { connect } from 'react-redux';

const LessonContent = props => {
    return (
        <div className="ui segment">
            <div className="ui grid">

                <div className="three wide column">
                    <img src="/lms/ajax/images/classimg.png" 
                        alt="" className="ui image" />
                </div>

                <div className="eleven wide column">
                    <div className="ui header">
                        <div className="content"
                                style={{
                                    fontSize:"16px",
                                    color:"rgba(0, 0, 0, 0.85)",
                                    lineHeight:"22px"}}  >
                            {props.data?props.data.name:""}
                        </div>
                    </div>

                    <div className="ui grid">
                        <div className="eight wide column">
                            <span style={{
                                fontSize:"12px",
                                fontWeight:"400",
                                color:"rgba(0, 0, 0, 0.65)",
                                lineHeight:"16px"}}>
                                教师  
                                <span style={{color:"black"}}>
                                    {props.data?`  ${props.data.courseCreator} ${props.data.courseTeacherString}`:""}
                                </span>
                            </span>

                            <span style={{
                                marginLeft:"8px",
                                fontSize:"12px",
                                fontWeight:"400",
                                color:"rgba(0, 0, 0, 0.65)",
                                lineHeight:"16px"}}>
                            </span>
                        </div>

                        <div className="eight wide column">
                            <span style={{
                                fontSize:"12px",
                                fontWeight:"400",
                                color:"rgba(0, 0, 0, 0.65)",
                                lineHeight:"16px"}}>
                                时间
                            </span>

                            <span style={{
                                marginLeft:"8px",
                                fontSize:"12px",
                                fontWeight:"400",
                                color:"rgba(0, 0, 0, 0.65)",
                                lineHeight:"16px"}}>
                               {props.data?`${props.data.startDateString}~${props.data.endDateString}`:""}
                            </span>
                        </div>
                    </div>

                    <div className="margin-top: 8px;">
                        <span style={{
                            fontSize:"12px",
                            fontWeight:"400",
                            color:"rgba(0, 0, 0, 0.65)",
                            lineHeight:"16px"
                        }}>介绍</span>

                        <span style={{
                            marginLeft:"8px",
                            fontSize:"12px",
                            fontWeight:"400",
                            color:"rgba(0, 0, 0, 0.85)",
                            lineHeight:"17px"
                        }}>
                             {props.data?`  ${props.data.introduction}`:""}
                        </span>

                    </div>
                </div>

                <div className="two wide column">
                    <div role="listbox" aria-expanded="false" 
                     className="ui dropdown" tabIndex="0">
                        <div aria-atomic="true" aria-live="polite" 
                            role="alert" className="divider text">
                                课程选项
                        </div>
                        <i aria-hidden="true" className="dropdown icon"></i>
                        <div className="menu transition">
                            <div role="option" className="item" aria-selected="false">
                                <p>编辑课程</p>
                            </div>
                            <div role="option" className="item" aria-selected="false">
                                <p>复制课程</p>
                            </div>
                            <div role="option" className="item" aria-selected="false">
                                <p style={{textAlign:"center",color:"red"}}>
                                    删除
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        data:state.detail.data
    }
}

export default connect(mapStateToProps)(LessonContent);