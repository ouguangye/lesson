export const createReducer = (state={},action) => {
    switch(action.type){
        case "NAME_COLLECT": {
            return {...state,name:action.payload}
        }
        case "OPEN_COLLECT":{
            return {...state,isOpen:action.payload }
        }
        case "HOUR_COLLECT":{
            return {...state,hours:action.payload}
        }
        case "CREDIT_COLLECT":{
            return {...state,credit:action.payload}
        }
        case "ERROR_COLLECT":{
            return {...state,error:action.payload}
        }
        default:return state;
    }
}