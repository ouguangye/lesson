import React from 'react';


const style = {
    padding:"4px 16px",
    cursor:"pointer",
    background:"white"
}



const HomeWork = props => {
    return (
        <div className="ui segment" style={style}>
            <span style={{lineHeight:"36px",color:"black"}}>
                <i 
                    aria-hidden="true" 
                    className="olive pencil icon"
                    style={{marginRight:"8px"}}
                ></i>
                {props.name}
            </span>

            <span style={{marginLeft:"16px"}}>
                <i 
                    aria-hidden="true" 
                    className="bell outline icon"
                    style={{marginRight:"8px"}}
                ></i>
                {`${props.endDate}之前交`}
            </span>

            <div className="ui right floated buttons fade left hidden transition">
                <span className="ui basic icon button" role="button">
                    <i aria-hidden="true" className="edit icon"></i>
                </span>

                <span className="ui basic icon button" role="button">
                    <i aria-hidden="true" className="trash icon"></i>
                </span>
            </div>
        </div>
    )
}

export default HomeWork;