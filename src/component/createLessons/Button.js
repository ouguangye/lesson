import history from "../history";
import { connect } from "react-redux";
import {errorCollect} from "../../actions";

const Button = props => {

    const onButtonClick = e => {
        e.preventDefault();
        if(props.name==="")props.errorCollect(true);
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
               onClick={()=>{history.push("/main")}} >
                   <i aria-hidden="true" className="cancel icon"></i>
                   取消
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        name:state.create.name
    }
}

export default connect(mapStateToProps,{errorCollect})(Button);