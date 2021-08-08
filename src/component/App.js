import React from 'react';
import "./style.css";
import InputInf from './inputInf';
import SunFlower from './sunflower';
const App=()=>{
    return (
        <div className="loginDiv">
            <div className="ui center aligned middle aligned grid" 
                    style={{height:"100vh"}}>
                <div className="column" style={{maxWidth:"450px"}}>
                    <div className="ui segment">
                        <h2 className="ui orange center aligned header"><SunFlower/></h2>
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
                                <button type="submit" className="ui orange large fluid button">登录</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;