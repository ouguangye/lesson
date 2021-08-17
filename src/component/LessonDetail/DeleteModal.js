import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import lms from '../../api/lms';
import { connect } from 'react-redux';
import { messageList } from "../../actions"

const DeleteModal = props => {
    const [disable,setDisable] = useState(false);
    const buttonType = disable ? "ui blue loading disabled button":"ui blue button"
    const onPositiveButtonClick = async(e) => {
        e.preventDefault();
        setDisable(true);
        await lms.post(
            "/json/learning/deleteMessage",{},
            {
                params:{
                    messageId:props.id
                }
            }
        )
        props.setVisible(false);
        props.messageList(props.currentId)
    }

    return ReactDOM.createPortal(
        <div className="ui page modals dimmer transition visible active" 
                style={{display:"flex"}}>
            <div className="ui tiny modal transition visible active"
                 style={{marginLeft:"30%",marginTop:"15%"}}>
                <div className="header">
                    <i aria-hidden="true" className="trash icon"></i>
                    删除通知
                </div>
                <div className="content">
                    <form className="ui form">
                        <div className="ui error message">
                            <div className="content">
                                <div className="header"></div>
                            </div>
                        </div>
                        <div className="fields" style={{float:"right"}}>
                            <button type="submit" className={buttonType}
                               onClick={e=>{onPositiveButtonClick(e)}} >
                                <i aria-hidden="true" className="check icon"></i>
                                确定
                            </button>
                            <button type="button" className="ui small button"
                              onClick={()=>{props.setVisible(false)}} >
                                <i aria-hidden="true" className="cancel icon"></i>
                                取消
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    )
}

export default connect(null,{messageList})(DeleteModal);