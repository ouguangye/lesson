const LessonContent = () => {
    return (
        <div className="ui segment">
            <div className="ui grid">

                <div className="three wide column">
                    <img src="/lms/ajax/images/classimg.png" 
                        alt="" className="ui image" />
                </div>

                <div className="eleven wide column">
                    <div className="ui header">
                        <div className="content"
                                style={{
                                    fontSize:"16px",
                                    color:"rgba(0, 0, 0, 0.85)",
                                    lineHeight:"22px"}}  >
                            测试作业二
                        </div>
                    </div>

                    <div className="ui grid">
                        <div className="eight wide column">
                            <span style={{
                                fontSize:"12px",
                                fontWeight:"400",
                                color:"rgba(0, 0, 0, 0.65)",
                                lineHeight:"16px"}}>
                                教师
                            </span>

                            <span style={{
                                marginLeft:"8px",
                                fontSize:"12px",
                                fontWeight:"400",
                                color:"rgba(0, 0, 0, 0.65)",
                                lineHeight:"16px"}}>
                            </span>
                        </div>

                        <div className="eight wide column">
                            <span style={{
                                fontSize:"12px",
                                fontWeight:"400",
                                color:"rgba(0, 0, 0, 0.65)",
                                lineHeight:"16px"}}>
                                时间
                            </span>

                            <span style={{
                                marginLeft:"8px",
                                fontSize:"12px",
                                fontWeight:"400",
                                color:"rgba(0, 0, 0, 0.65)",
                                lineHeight:"16px"}}>
                                Dec 29, 2020 ~ Dec 29, 2070
                            </span>
                        </div>
                    </div>

                    <div className="margin-top: 8px;">
                        <span style={{
                            fontSize:"12px",
                            fontWeight:"400",
                            color:"rgba(0, 0, 0, 0.65)",
                            lineHeight:"16px"
                        }}>介绍</span>

                        <span style={{
                            marginLeft:"8px",
                            fontSize:"12px",
                            fontWeight:"400",
                            color:"rgba(0, 0, 0, 0.85)",
                            lineHeight:"17px"
                        }}>1</span>

                    </div>
                </div>

                <div className="two wide column"></div>
            </div>
        </div>
    )
}

export default LessonContent;