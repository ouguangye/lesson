const InfPart1 = () => {
    return(
        <div className="fields">
            <div name="filename" className="field">
                <label>我的头像</label>
                <div className="ui small fade reveal">
                    <div className="ui visible content"
                        style={{height:"100%",width:"100%"}}>
                        <img src="/lms/ajax/images/teach.png"
                            className="ui image" alt=""
                            style={{height:"100%",width:"100%",borderRadius:"50%"}} >
                        </img>
                    </div>
                </div>
            </div>
            <div>
                <div className="field">
                    <label>姓名</label>
                    <div className="ui input">
                        <input placeholder="姓名" name="name" 
                            type="text" value="欧光业"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfPart1;