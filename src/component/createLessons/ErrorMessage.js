import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {errorCollect} from "../../actions";

const ErrorMessage = props => {
    const {error,errorCollect}=props;

    useEffect(()=>{
        errorCollect(false);
    },[errorCollect])

    if(!error) return <div></div>
    return(
        <div className="ui error visible message">
            <div className="content">
                <div className="header">
                    对不起，操作失败，请输入课程名称。
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        error:state.create.error
    }
}  

export default connect(mapStateToProps,{errorCollect})(ErrorMessage);