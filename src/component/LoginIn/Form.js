import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import InputInf from './inputInf';
import { signIn,dataRequest,lessonsFetch,changeChoice } from '../../actions';

const Form = props => {
    const [userName,setUserName] = useState(null);
    const [password,setPassword] = useState(null);
    
    const onButtonCLick= (e)=>{
        e.preventDefault();
        props.signIn(userName,password);
        props.dataRequest();
        props.lessonsFetch(1);
        props.changeChoice(0);
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
           {props.error}
        </form>
    )
}

const mapStateToProps = state => {
    return {
        isSignIn:state.auth.isSignIn,
        error : state.auth.error
    }
}

export default connect(
    mapStateToProps,
    {signIn,dataRequest,lessonsFetch,changeChoice}
    ) (Form);