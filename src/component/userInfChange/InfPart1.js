const InfPart1 = () => {
    return(
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
    )
}

export default InfPart1;