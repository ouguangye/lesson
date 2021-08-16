const photoStyle = {
    height: "100%",
    border: "1px dashed grey",
    cursor: "pointer",
    textAlign:"center"
}

const leftPhotoDivstyle={
    width: "200px",
    height: "112.5px",
    borderRadius:"2px",
    cursor:"pointer"
}

const PhotoContent = () => {
    return(
        <div className="five wide column">
            <div name="filename" className="field">
                <label>课程封面</label>
                <div className="ui small fade reveal" style={leftPhotoDivstyle}>
                    <div className="ui visible content"
                        style={{height:"100%",width:"100%"}} >
                        <img className="ui image" alt=''
                            src="/lms/ajax/images/classimg.png"  
                            style={{height:"100%",width:"100%"}} />
                    </div>
                    <div className="ui content">
                        <i aria-hidden="true" className="add icon"
                              style={{photoStyle}}></i>
                        <p>上传图片</p>
                    </div>
                    <input id="filename" type="file" accept="image/*"
                        style={{display:"none"}} />
                </div>
            </div>
        </div>
    )
}

export default PhotoContent;