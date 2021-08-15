export const dataReducer = (state={},action) =>{
    switch(action.type){
        case "DATA_REQUEST":{
            if(!action.payload.name)window.location.href="/";
            return {
                ...state,
                userName:action.payload.name,
                email:action.payload.email,
                phone:action.payload.phone,
                introduction:action.payload.introduction
            }
        }
        case "CHANGE_NAME": return {...state,userName:action.payload}
        case "CHANGE_EMAIL":return {...state,email:action.payload}
        case "CHANGE_PHONE":return {...state,phone:action.payload}
        case "CHANGE_INTRO":return {...state,introduction:action.payload}
        default: return state;
    }
}