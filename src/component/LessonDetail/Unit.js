const style = {
    padding: "4px 16px",
    cursor:"pointer",
    borderRadius:"4px",
    background:"white"
}

const Unit = props => {
    return (
        <div className="ui segment ellipsis" style={style}>
            <span style={{lineHeight:"40px", color:"black"}}>
                <i 
                    aria-hidden="true" 
                    className="blue book icon"
                    style={{marginRight:"8px"}}
                />
                <span>{props.name}</span>
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

export default Unit;