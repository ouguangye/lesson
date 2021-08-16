const ReplyForm = () => {
    return(
        <form className="ui reply form">
            <div className="field">
                <textarea placeholder="请老师在这里发布课程的通知" rows="3"/>
            </div>
            <div className="field">
                <button className="ui icon primary right floated left labeled button">
                    <i aria-hidden="true" className="edit icon"></i>
                    发布通知
                </button>
            </div>
        </form>
    )
}

export default ReplyForm;