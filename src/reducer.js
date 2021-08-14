import { combineReducers } from "redux"

import currentUserReducer from "./features/currentUser/currentUserSlice";
import usersReducer from "./features/users/usersSlice";
import pollsReducer from "./features/polls/pollsSlice";
import { loadingBarReducer } from "react-redux-loading-bar";
const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    users: usersReducer,
    polls: pollsReducer,
    loadingBar: loadingBarReducer,
})
export default rootReducer