const Date = props => {
    return (
        <div className="equal width fields">
            <div className="field">
                <label>章节开始时间</label>
                <div className="ui fluid icon input" 
                    style={{margin:"8px 0px",alignItems:"baseline"}}>
                        <i aria-hidden="true" className="calendar icon"></i>
                        <input id="startDate" name="startDate"
                            type="text" value={props.startDate} 
                            >
                        </input>
                </div>
            </div>
            <div className="field">
                <label>章节结束时间</label>
                <div className="ui fluid icon input" 
                    style={{margin:"8px 0px",alignItems:"baseline"}}>
                        <i aria-hidden="true" className="calendar icon"></i>
                        <input id="endDate" name="endDate" 
                            type="text" value={props.endDate}
                            onChange={e=>{props.setEndDate(e.target.value)}} >
                        </input>
                </div>
            </div>
        </div>
    )
}

export default Date;