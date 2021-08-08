import lms from "../api/lms"

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
    dispatch({type:"SIGN_IN",payload:respond.result})
}