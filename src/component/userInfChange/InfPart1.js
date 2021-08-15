import React from 'react';
import { connect } from 'react-redux';
import { changeName } from '../../actions';

const InfPart1 = props => {
    return(
        <div className="fields">
            <div name="filename" className="field">
                <label>我的头像</label>
                <div className="ui small fade reveal userReveal">
                    <div className="ui visible content"
                        style={{height:"100%",width:"100%"}}>
                        <img src="/lms/ajax/images/teach.png"
                            className="ui image" alt=""
                            style={{height:"100%",width:"100%",borderRadius:"50%"}} >
                        </img>
                    </div>
                </div>
            </div>
            <div>
                <div className="field">
                    <label>姓名</label>
                    <div className="ui input">
                        <input placeholder="姓名" name="name" 
                            type="text" value={props.name}
                           onChange={e=>{props.changeName(e.target.value)}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name:state.data.userName
    }
}

export default connect(mapStateToProps,{changeName})(InfPart1);