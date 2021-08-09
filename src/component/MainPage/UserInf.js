import React from 'react';

const UserInf = () => {
    return(
        <span className="ui header"
            style={{marginLeft:"16px",visibility:"visible"}} >

            <img src="http://lms.scutnc.cn/lms/ajax/images/teach.png"
                className="ui circular image"
                alt=""
                />

            <div className="content" style={{color:'white'}}>
                欧光业，你好
                <div className="sub header" style={{color:'white'}}>
                    名人名言
                </div>
            </div>

        </span>
    )
}

export default UserInf;