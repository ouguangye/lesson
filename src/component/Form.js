import React from 'react';
import InputInf from './inputInf';

const  Form = () =>{
    return(
        <form className="ui large form">
            <InputInf name="account" 
                placeholder="输入学号/手机号" 
                type="text" 
                icon="user icon"/>
            <InputInf 
                name="password" 
                placeholder="输入密码" 
                type="password" 
                icon="lock icon"/>
            <div className="field">
                <button type="submit" 
                    className="ui orange large fluid button">
                        登录
                </button>
            </div>
        </form>
    )
}

export default Form;