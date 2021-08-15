import history from "../history";
import { connect } from "react-redux";
import {errorCollect} from "../../actions";
import lms from "../../api/lms";

const Button = props => {

    const onButtonClick = e => {
        e.preventDefault();
        if(props.name==="")props.errorCollect(true);
        else createRequest();
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
        history.push("/main/lesson");
    }

    return(
        <div className="fields" style={{float:"right"}}>
            <button type="submit" className="ui blue button"
               style={{marginRight: "8px"}}
               onClick={e => {onButtonClick(e)}} >
                   <i aria-hidden="true" className="check icon"></i>
                   确认
            </button>
            <button type="button" className="ui small button"
               style={{marginRight: "8px"}} 
               onClick={()=>{history.push("/main/lesson")}} >
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