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