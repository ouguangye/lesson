import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Date from './Date';
import lms from '../../../api/lms';

const SectionModal = props => {
    const startDate = moment().format('YYYY-MM-DD hh:mm:ss');
    const [endDate,setEndDate] = useState("");
    const [name,setName] = useState("");
    const [order,setOrder] = useState(0);
    const [intro,setIntro] = useState("");
    const [disable,setDisable] = useState(false);
    const buttonType = disable ? "ui blue loading disabled button":"ui blue button"

    const onPositiveButtonClick = async(e) => {
        e.preventDefault();
        setDisable(true);
        await lms.post(
            "/json/creator/saveSection",{},{
                params:{
                    name:name,
                    introduction:intro,
                    order:order,
                    startDate:startDate,
                    endDate:endDate,
                    courseId:props.currentId
                }
            }
        )
        props.setVisible(false);
    }

    return ReactDOM.createPortal(
        <div className="ui page modals dimmer transition visible active">
        <div className="ui small scrolling modal transition visible active"
             style={{marginTop:"10%",marginLeft:"19%"}} >
            <div className="header">
                <i aria-hidden="true" className="book icon"></i>
                创建章节
            </div>
            <div className="content">
                <form className="ui form">
                    <div className="fields">
                        <div className="required thirteen wide field">
                            <label>章节名称</label>
                            <div className="ui input">
                                <input name="name" 
                                       placeholder="新建章节的名称"
                                       required type="text"
                                       value={name}
                                       onChange={e=>setName(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className="two wide field">
                            <label>序号</label>
                            <div className="ui input">
                                <input 
                                    name="orderId"
                                    placeholder="新建章节的序号"
                                    type="text"
                                    value={order}
                                    onChange={e=>setOrder(e.target.value)}
                                ></input>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>章节介绍</label>
                        <textarea 
                            name="introduction" 
                            placeholder="新建章节的简单介绍"
                            rows="3"
                            value={intro}
                            onChange={e=>{setIntro(e.target.value)}}
                        />
                    </div>

                    <Date 
                        startDate={startDate} 
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

export default SectionModal;