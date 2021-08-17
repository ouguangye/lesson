import { useState } from "react";
import { connect } from "react-redux";
import {errorCollect} from "../../actions";
import lms from "../../api/lms";

const Button = props => {
   const [disable,setDisable] = useState(false);
   const buttonType = disable ? "ui blue loading disabled button":"ui blue button"

    const onButtonClick = e => {
        e.preventDefault();
        if(props.name==="")props.errorCollect(true);
        else {
            setDisable(true);
            createRequest();
        }
    }

    const createRequest = async () => {
        await lms.post (
            "/json/creator/saveCourse",
            {},
           {
                params:{
                    name:props.name,
                    classHour:props.hours,
                    credit:props.credit,
                    startDate:props.startDate,
                    endDate:props.endDate
                }
           },
        )
        props.setVisible(false);
        window.location.href = props.href;
    }
   
    return(
        <div className="fields" style={{float:"right"}}>
            <button type="submit" className={buttonType} id="createButton"
               style={{marginRight: "8px"}}
               onClick={e => {onButtonClick(e)}} >
                   <i aria-hidden="true" className="check icon"></i>
                   确定
            </button>
            <button type="button" className="ui small button"
               style={{marginRight: "8px"}} 
               onClick={()=>{ props.setVisible(false);}}>
                   <i aria-hidden="true" className="cancel icon"></i>
                   取消
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        name:state.create.name,
        hours:state.create.hours,
        credit:state.create.credit,
        startDate:state.create.startDate,
        endDate:state.create.endDate
    }
}

export default connect(mapStateToProps,{errorCollect})(Button);