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
    history.push("/main");
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