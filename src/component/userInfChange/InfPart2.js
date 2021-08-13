import React from 'react';
import { connect } from 'react-redux';
import {changeEmail,changePhone} from "../../actions";

const InfPart2 = props => {
    return(
        <div className="equal width fields">
            <div className="field">
                <label>电子邮件</label>
                <div className="ui input">
                    <input placeholder="输入邮箱" name="email" 
                     type="text" value={props.email}
                     onChange={e=>{props.changeEmail(e.target.value)}}/>
                </div>
            </div>
            <div className="field">
                <label>联系电话</label>
                <div className="ui input">
                    <input placeholder="输入联系电话" name="telephone" 
                     type="text" value={props.phone}
                     onChange={e => {props.changePhone(e.target.value)}} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        email :state.data.email,
        phone:state.data.phone
    }
}

export default connect(mapStateToProps,{changeEmail,changePhone})(InfPart2);