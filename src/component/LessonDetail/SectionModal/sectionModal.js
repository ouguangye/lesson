import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Date from './Date';

const SectionModal = () => {
    const startDate = moment().format('YYYY-MM-DD hh:mm:ss');
    const [endDate,setEndDate] = useState("");
    const [disable,setDisable] = useState(false);
    const buttonType = disable ? "ui blue loading disabled button":"ui blue button"

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
                                    value="0"
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
                        >
                            <i aria-hidden="true" className="check icon"></i>
                            确定
                        </button>
                        <button 
                            type="button" 
                            className="ui small button"
                            style={{marginRight: "8px"}} 
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