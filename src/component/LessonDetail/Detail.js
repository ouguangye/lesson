import Comment from "./Comment";
import ReplyForm from "./ReplyForm";
import Session from './Session';
import { connect } from "react-redux"

const renderSession = (sessions) => {
    return sessions.map(
        session => {
            console.log(session);
            return <Session key={session.id} name={session.name} />
        }
    )
}

const Detail = props => {
    return(
        <div className="ui grid">
            <div className="twelve wide column">
                {props.list?renderSession(props.list):null}
                <div className="ui segment" 
                    style={{
                        background:"transparent",
                        border:"1px dashed rgb(65, 131, 196)",
                        marginBottom: "8px",
                        color:"rgb(65, 131, 196)",
                        cursor:"pointer"}}>
                    <i aria-hidden="true" className="add icon"></i>
                    创建章节
                </div>
            </div>

            <div className="four wide column">
                <div className="ui container">
                    <div className="ui small minimal comments"
                        style={{marginTop:"8px"}}>
                        <h3 className="ui dividing header">课程通知</h3>
                        <Comment/>
                        <ReplyForm/>
                    </div>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        list:state.detail.list
    }
}

export default connect(mapStateToProps)(Detail);