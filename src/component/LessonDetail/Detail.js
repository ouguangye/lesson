import Comment from "./Comment";
import ReplyForm from "./ReplyForm";
import Section from './Section';
import { connect } from "react-redux"
import SectionModal from "./SectionModal/sectionModal";
import { useState } from "react";




const Detail = props => {
    const [visible,setVisible] = useState(false);
    const renderSession = (sections) => {
        return sections.map(
            section => {
                return (
                    <Section 
                        key={section.id} 
                        id={section.id}
                        name={section.name}
                        currentId={props.currentId} 
                    />)
            }
        )
    }

    const renderComment = comments => {
        return comments.map(
            comment => {
                return <Comment 
                    key={comment.id}
                    id = {comment.id} 
                    name={comment.creatorName}
                    data={comment.createDate}
                    content={comment.content}
                    currentId={props.currentId}
                    />
            }
        )
    }

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
                        cursor:"pointer"}}
                    onClick={()=>{setVisible(true)}}
                >
                    <i aria-hidden="true" className="add icon"></i>
                    创建章节
                </div>
            </div>

            <div className="four wide column">
                <div className="ui container">
                    <div className="ui small minimal comments"
                        style={{marginTop:"8px"}}>
                        <h3 className="ui dividing header">课程通知</h3>
                        {props.comments?renderComment(props.comments):null}
                        <ReplyForm currentId={props.currentId}/>
                    </div>
                </div>
            </div>
        {visible?
            <SectionModal 
                setVisible={setVisible} 
                currentId={props.currentId}/>
            :null}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        list:state.detail.list,
        comments:state.detail.comments
    }
}

export default connect(mapStateToProps)(Detail);