const DatePart = (label,name) => {
    return (
        <div className="field">
            <label>{label}</label>
            <div className="ui fluid icon input" 
                style={{margin:"8px 0px",alignItems:"baseline"}}>
                    <i aria-hidden="true" className="calendar icon"></i>
                    <input id={name} name={name} type="text"></input>
            </div>
        </div>
    )
}

const Date = () => {
    return (
        <div className="equal width fields">
            {DatePart("课程开始日期","startDate")}
            {DatePart("课程截至日期","endDate")}
        </div>
    )
}

export default Date;