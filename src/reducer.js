import { combineReducers } from "redux"

import currentUserReducer from "./features/currentUser/currentUserSlice";
import usersReducer from "./features/users/usersSlice";
import pollsReducer from "./features/polls/pollsSlice";

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    users: usersReducer,
    polls: pollsReducer,
})
export default rootReducer