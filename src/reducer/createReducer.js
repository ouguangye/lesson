export const createReducer = (state={},action) => {
    switch(action.type){
        case "NAME_COLLECT": {
            return {...state,name:action.payload}
        }
        case "OPEN_COLLECT":{
            return {...state,isOpen:action.payload }
        }
        default:return state;
    }
}