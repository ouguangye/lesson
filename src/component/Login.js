import React from 'react';
import SunFlower from './sunflower';
import Form from './Form';

const Login = () => {
    return(
        <div className="loginDiv">
            <div className="ui center aligned middle aligned grid" 
                    style={{height:"100vh"}}>
                <div className="column" style={{maxWidth:"450px"}}>
                    <div className="ui segment" 
                        style={{display:"block",borderRadius:"20px"}}>
                        <h2 className="ui orange center aligned header">
                            <SunFlower/>
                        </h2>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default Login;