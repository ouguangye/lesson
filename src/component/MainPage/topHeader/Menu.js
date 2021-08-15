import React from 'react';
import lms from '../../../api/lms';
import history from '../../history';

const itemStyle = {
    fontSize: "14px",
    cursor: "pointer",
    fontWeight:"200"
} 

const Menu = props => {
    return(
        <React.Fragment>
            <div role="option" className="item" 
                aria-selected="false" style={itemStyle} >
                <i aria-hidden="true" className="user icon"></i>
                <a href="#/" style={{color:"black"}} 
                    onClick={(e)=>{
                        e.preventDefault();
                        history.push("/main/my");
                        props.setMenuVisible(false);
                        }}>
                    个人信息
                </a>
            </div>
            <div role="option" className="item" 
                aria-selected="false" style={itemStyle}>
                <i aria-hidden="true" className="wrench icon"></i>
                <a href="#/" style={{color:"black"}}>管理端</a>
            </div>
            <div role="option" className="item" 
                aria-selected="false" style={itemStyle}>
                <i aria-hidden="true" className="sign out icon"></i>
                <a href="#/" style={{color:"black"}} 
                    onClick={()=>{signOut();}}>
                        登出系统
                </a>
            </div>
        </React.Fragment>
    )
}

const signOut = async () => {
    await lms.get("/htmlLogout");
    window.location.href="/";
}

export default Menu;