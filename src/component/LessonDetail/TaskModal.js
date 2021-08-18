import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import lms from '../../api/lms';
import Date from './SectionModal/Date';
import { connect } from 'react-redux';
import { teachList } from '../../actions';

const TaskModal = props => {
    const [startDate,setStartDate] = useState(props.startDate);
    const [endDate,setEndDate] = useState(props.endDate);
    const [name,setName] = useState(props.name);
    const [intro,setIntro] = useState(props.intro);
    const [disable,setDisable] = useState(false);
    const buttonType = disable ? "ui blue loading disabled button":"ui blue button"

    const onPositiveButtonClick = async(e) => {
        e.preventDefault();
        setDisable(true);
        await lms.post(
            props.href,{},
            {
                params:{
                    sectionId:props.id,
                    name:name,
                    startDate:startDate,
                    endDate:endDate,
                    introduction:intro,
                    courseId:props.currentId
                }
            }
        )
        props.setVisible(false);
        props.teachList(props.currentId);
    }

    return ReactDOM.createPortal(
        <div className="ui page modals dimmer transition visible active">
        <div className="ui small scrolling modal transition visible active"
             style={{marginTop:"10%",marginLeft:"19%"}} >
            <div className="header">
                <i aria-hidden="true" className={props.icon}></i>
                {props.topText}
            </div>
            <div className="content">
                <form className="ui form">
                    <div className="fields">
                        <div className="field">
                            <label>{props.headerText}</label>
                            <div className="ui input">
                                <input name="name" 
                                       placeholder={props.headerText}
                                       required type="text"
                                       value={name}
                                       onChange={e=>setName(e.target.value)}
                                ></input>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>{props.mainText}</label>
                        <textarea 
                            name="introduction" 
                            placeholder={props.mainText}
                            rows="3"
                            value={intro}
                            onChange={e=>{setIntro(e.target.value)}}
                        />
                    </div>

                    <Date 
                        startDate={startDate} 
                        setStartDate={setStartDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
                        />

                    <div className="fields" style={{float:"right"}}>
                        <button 
                            type="submit" 
                            className={buttonType} 
                            id="createButton"
                            style={{marginRight: "8px"}}
                            onClick={e=>{onPositiveButtonClick(e)}}
                        >
                            <i aria-hidden="true" className="check icon"></i>
                            确定
                        </button>
                        <button 
                            type="button" 
                            className="ui small button"
                            style={{marginRight: "8px"}} 
                            onClick={()=>{props.setVisible(false);}}
                        >
                            <i aria-hidden="true" className="cancel icon"></i>
                            取消
                        </button>
                    </div>
                </form>
                <div style={{height:"56px"}}></div>
            </div>
        </div>
        </div>,
        document.querySelector("#modal")
    )
}

export default connect(null,{teachList})(TaskModal);