export const lessonReducer = (state={},action) => {
    if(action.type==="LESSONS_FETCH"){
        return {
            ...state,
            open:action.payload.data.open,
            student:action.payload.data.student,
            teacher:action.payload.data.teacher
        }
    }
    return state;
}