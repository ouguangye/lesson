import React from 'react';
const MenuTransition = () => {
    return(
        <React.Fragment>
            <div role="option" aria-checked="false" 
                aria-selected="false" className="item" style={{pointerEvents:"all"}}>
                <span className="text">是</span>
            </div>
            <div role="option" aria-checked="true" 
                aria-selected="true" className="active selected item" 
                style={{pointerEvents:"all"}}>
                <span className="text">否</span>
            </div>
        </React.Fragment>
    )
}
export default MenuTransition;