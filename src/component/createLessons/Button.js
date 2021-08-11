const Button = () => {
    return(
        <div className="fields" style={{float:"right"}}>
            <button type="submit" className="ui blue button"
               style={{marginRight: "8px"}} >
                   <i aria-hidden="true" className="check icon"></i>
                   确认
            </button>
            <button type="button" className="ui small button"
               style={{marginRight: "8px"}} >
                   <i aria-hidden="true" className="cancel icon"></i>
                   取消
            </button>
        </div>
    )
}

export default Button;