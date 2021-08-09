import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import InputInf from './inputInf';
import { signIn } from '../../actions';

const Form = props => {
    const [userName,setUserName] = useState(null);
    const [password,setPassword] = useState(null);
    const [error,setError] = useState(null);
    
    const displayError=()=>{
        if(!props.isSignIn){
            return(
                <div className="ui error visible message">
                <div className="content">
                    用户名/密码不匹配
                </div>
            </div>
            )
        }
        return null;
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
                    onClick={e=>{
                        e.preventDefault();
                        props.signIn(userName,password);
                        setError(displayError());
                    }}
                    >
                        登录
                </button>
            </div>
            {error}
        </form>
    )
}

const mapStateToProps = state => {
    return {isSignIn:state.isSignIn}
}

export default connect(mapStateToProps,{signIn})(Form);