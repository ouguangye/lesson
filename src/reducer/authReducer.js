export const authReducer = (state={},action)=>{
    if(action.type==="SIGN_IN"){
        return {...state,signIn:action.payload}
    }
    return state;
}