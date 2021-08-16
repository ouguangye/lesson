import lms from "../api/lms"
import history from "../component/history"

export const signIn = (userName,password) => async dispatch => {
    const respond = await lms.post(
        "/htmlLogin",
        {},
        {
            params:{
                username: userName,
                password: password
            }
        }
    )
    dispatch({type:"SIGN_IN",payload:respond.data.result})
    if(respond.data.result==="success")history.push("/main");
}


export const dataRequest = ()=>async dispatch =>{
    const respond = await lms.post(
        "/json/account/getUser",
        {},
        {
            params:{}
        }
    )
    dispatch({type:"DATA_REQUEST",payload:respond.data})
}

export const lessonsFetch = (num) => async dispatch =>{
    const respond = await lms.post(
        "/json/learning/listCourse",
        {},
        {
           params:{
                courseStatus:num
           }
        }
    )
    dispatch({type:"LESSONS_FETCH",payload:respond})
}

export const changeChoice = (num) => {
    return{
        type:"CHANGE_CHOICE",
        payload:num
    }
}

export const nameCollect = (name) => {
    return{
        type:"NAME_COLLECT",
        payload:name
    }
}

export const openCollect = (isOpen) => {
    return {
        type:"OPEN_COLLECT",
        payload:isOpen==="否"?false:true
    }
} 

export const hourCollect = (hours) => {
    return {
        type:"HOUR_COLLECT",
        payload:hours
    }
}

export const creditCollect = (credit) => {
    return{
        type:"CREDIT_COLLECT",
        payload:credit
    }
}

export const errorCollect = (error) => {
    return {
        type:"ERROR_COLLECT",
        payload:error
    }
}

export const startDateCollect = (date) => {
    return {
        type:"START_DATA_COLLECT",
        payload:date
    }
} 

export const endDateCollect = (date) => {
    return {
        type:"END_DATA_COLLECT",
        payload:date
    }
} 

export const changeName = (name) => {
    return{
        type:"CHANGE_NAME",
        payload:name
    }
}

export const changeEmail = (email) => {
    return {
        type:"CHANGE_EMAIL",
        payload:email
    }
}

export const changePhone = (phone) => {
    return {
        type:"CHANGE_PHONE",
        payload:phone
    }
}

export const changeIntro = (content) => {
    return {
        type:"CHANGE_INTRO",
        payload:content
    }
}

export const courseDetail = id => async dispatch => {
    const respond = await lms.get(`/json/learning/courseDetail?courseId=${id}`);
    dispatch({type:"COURSE_DETAIL",payload:respond.data});
}

export const teachList = id => async dispatch => {
    const respond = await lms.get(`json/learning/listTeacherResource?courseId=${id}`);
    dispatch({type:"TEACH_lIST",payload:respond.data.section});
}

export const messageList = id => async dispatch => {
    const respond = await lms.get(`/json/learning/listMessage?courseId=${id}`);
    dispatch({type:"MESSAGE_LIST",payload:respond.data.message})
}