const InfPart2 = () => {
    return(
        <div className="equal width fields">
            <div className="field">
                <label>电子邮件</label>
                <div className="ui input">
                    <input placeholder="输入邮箱" name="email" type="text"/>
                </div>
            </div>
            <div className="field">
                <label>联系电话</label>
                <div className="ui input">
                    <input placeholder="输入联系电话" name="telephone" type="text"/>
                </div>
            </div>
        </div>
    )
}

export default InfPart2;