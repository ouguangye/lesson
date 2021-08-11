import React from 'react';

const MenuTransition = props => {
    const oppsite = props.option === "是" ? "否" :"是";

    return(
        <React.Fragment>
            <div role="option" aria-checked="false" 
                aria-selected="false" className="item" 
                style={{pointerEvents:"all"}}
                onClick={()=>{props.setOption(oppsite)}} 
                 >
                <span className="text">{oppsite}</span>
            </div>
            <div role="option" aria-checked="true" 
                aria-selected="true" className="active selected item" 
                style={{pointerEvents:"all"}}>
                <span className="text">{props.option}</span>
            </div>
        </React.Fragment>
    )
}
export default MenuTransition;