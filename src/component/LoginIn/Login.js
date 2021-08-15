import React from 'react';
import SunFlower from '../sunflower';
import Form from './Form';

const style ={
    position:"absolute",
    width: "100%",
    height: "100%",
    background: "url('http://lms.scutnc.cn/static/media/login_bg.a5b3d58b.jpg') 100% center / 100% no-repeat"
}

class Login extends React.Component {
    render(){
        return(
            <div style={style}>
                <div className="ui center aligned middle aligned grid" 
                        style={{height:"100vh"}}>
                    <div className="column" style={{maxWidth:"450px"}}>
                        <div className="ui segment"
                            style={{display:"block",borderRadius:"20px"}}
                        >
                            <h2 className="ui orange center aligned header">
                                <SunFlower/>
                                Sunflower LMS
                            </h2>
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
    )
    }
}
export default Login;