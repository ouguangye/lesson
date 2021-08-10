import { combineReducers } from "redux";
import {authReducer} from "./authReducer";
import {dataReducer} from "./dataReducer"
import { lessonReducer } from "./lessonReducer";

export default combineReducers({
    auth: authReducer,
    data: dataReducer,
    lesson: lessonReducer
})