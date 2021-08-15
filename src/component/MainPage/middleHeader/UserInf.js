import React from 'react';
import { connect } from 'react-redux';

const UserInf = props => {
    return(
        <span className="ui header"
            style={{marginLeft:"16px",visibility:"visible"}} >

            <img src="http://lms.scutnc.cn/lms/ajax/images/teach.png"
                className="ui circular image"
                alt=""
                />

            <div className="content" style={{color:'white'}}>
               {props.userName} 你好 
                <div className="sub header" style={{color:'white'}}>
                    名人名言
                </div>
            </div>

        </span>
    )
}

const mapStateToProps = (state) => {
    return{
        userName:state.data.userName
    }
}

export default connect(mapStateToProps)(UserInf);