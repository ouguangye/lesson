import React from 'react';

const InputInf = props => {
    return(
        <div className="field">
            <div className="ui fluid left icon input">
                <input name={props.name} 
                    placeholder={props.placeholder} 
                    type={props.type}/>
                <i aria-hidden="true" className={props.icon}/>
            </div>
        </div>
    )
}

export default InputInf;