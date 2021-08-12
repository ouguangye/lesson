import React, { useEffect } from "react";
import { connect } from "react-redux";
import {hourCollect,creditCollect} from "../../actions";

const InfField = props => {
    const {hourCollect,creditCollect} = props;
    useEffect(()=>{
        hourCollect("");
        creditCollect("");
    },[hourCollect,creditCollect])

    return(
        <div className="equal width fields">
            <div className="six wide field">
                <label>课程学时</label>
                <div className="ui input">
                    <input name="classHour" placeholder="课时" 
                        type="text" 
                        onChange={e=>{hourCollect(e.target.value)}} >
                    </input>
                </div>
            </div>
            <div className="six wide field">
                <label>课程学分</label>
                <div className="ui input">
                    <input name="credit" placeholder="学分" 
                        type="text" 
                        onChange={e=>{creditCollect(e.target.value)}}    />
                </div>
            </div>
            <div className="field">
                <label>课程类型</label>
                <div name="type" role="listbox" aria-expanded="false"
                    className="ui selection dropdown" tabIndex="0">
                    <div aria-atomic="true" aria-live="polite" 
                        role="alert" className="divider text">
                            必修课
                    </div>
                    <i aria-hidden="true" className="dropdown icon" ></i>
                </div>
            </div>
        </div>
    )
}

export default connect(null,{hourCollect,creditCollect})(InfField)