import lms from "../api/lms"
import history from "../component/history"

export const signIn = (userName,password)=>async dispatch=>{
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

export const lessonsFetch = () => async dispatch =>{
    const respond = await lms.post(
        "/json/learning/listCourse?courseStatus=1",
        {},
        {
            params:{
                listCourse:"courseStatus=1"
            }
        }
    )

    dispatch({type:"LESSONS_FETCH",payload:respond})
}