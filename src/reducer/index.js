import { combineReducers } from "redux";
import {authReducer} from "./authReducer";
import {DataReducer} from "./dataReducer"

export default combineReducers({
    auth: authReducer,
    data: DataReducer
})