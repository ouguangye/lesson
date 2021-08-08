import React from 'react';

const InputInf = () => {
    return(
        <div className="field">
            <div className="ui fluid left icon input">
                <input name="account" placeholder="输入学号/手机号" type="text"/>
                <i aria-hidden="true" className="user icon"/>
            </div>
        </div>
    )
}

export default InputInf;