import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import InputInf from './inputInf';
import { signIn,dataRequest,lessonsFetch } from '../../actions';

const Form = props => {
    const [userName,setUserName] = useState(null);
    const [password,setPassword] = useState(null);
    const [error,setError] = useState(false);
    
    const onButtonCLick= async(e)=>{
        e.preventDefault();
        props.signIn(userName,password);
        props.dataRequest();
        await props.lessonsFetch();
        setError(!props.isSignIn);
    }


    const displayError=()=>{
        if(!error)return;
        return(
            <div className="ui error visible message">
                <div className="content">
                    用户名/密码不匹配
                </div>
            </div>
        )
        }

    return(
        <form className="ui large form">
            <InputInf name="account" 
                placeholder="输入学号/手机号" 
                type="text" 
                icon="user icon"
                setAccount={setUserName}
                />
            <InputInf 
                name="password" 
                placeholder="输入密码" 
                type="password" 
                icon="lock icon"
                setAccount={setPassword}
                />
            <div className="field">
                <button type="submit" 
                    className="ui orange large fluid button"
                    onClick={(e)=>{onButtonCLick(e)}}
                    >
                        登录
                </button>
            </div>
            {displayError()}
        </form>
    )
}

const mapStateToProps = state => {
    return {isSignIn:state.auth.isSignIn}
}

export default connect(mapStateToProps,{signIn,dataRequest,lessonsFetch})(Form);