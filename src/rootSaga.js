import { all, call } from "redux-saga/effects";
import currentUserSagas from "./features/currentUser/currentUserSagas";
import  usersSagas  from "./features/users/usersSagas";
import  pollsSagas  from "./features/polls/pollsSagas";

export default function* rootSaga() {
    yield all([
        call(currentUserSagas),
        call(usersSagas),
        call(pollsSagas)
    ])
}