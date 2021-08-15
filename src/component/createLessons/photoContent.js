const PhotoContent = () => {
    return(
        <div className="five wide column">
            <div name="filename" className="field">
                <label>课程封面</label>
                <div className="ui small fade reveal lessonReveal">
                    <div className="ui visible content"
                        style={{height:"100%",width:"100%"}} >
                        <img className="ui image" alt=''
                            src="/lms/ajax/images/classimg.png"  
                            style={{height:"100%",width:"100%"}} />
                    </div>
                    <div className="ui content photoContent">
                        <i aria-hidden="true" className="add icon"
                            style={{marginTop:"40px"}} alt=""></i>
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