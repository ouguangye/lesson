const InfField = () => {
    return(
        <div className="equal width fields">
            <div className="six wide field">
                <label>课程学时</label>
                <div className="ui input">
                    <input name="classHour" placeholder="课时" 
                        type="text" value>
                    </input>
                </div>
            </div>
            <div className="six wide field">
                <label>课程学分</label>
                <div className="ui input">
                    <input name="credit" placeholder="学分" 
                        type="text" value/>
                </div>
            </div>
            <div className="field">
                <label>必修课</label>
            </div>
        </div>
    )
}

export default InfField