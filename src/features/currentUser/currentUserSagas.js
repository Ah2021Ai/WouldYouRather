import { call, put ,all, takeLatest } from "redux-saga/effects";

function* setCurrentUser(action) {
    yield put({
    type: 'currentUser/login',
    payload: action.payload
    })
}
function* watchSetCurrentUser() {
    yield takeLatest('currentUser/setCurrentUser', setCurrentUser)
}

function* logoutUser() {
    yield put({
        type: "currentUser/logout"
    })
    yield put({type: 'polls/removePolls'})
}

function* watchLogoutUser() {
    yield takeLatest("currentUser/logoutUser", logoutUser)
}

export default function* currentUserSagas() {
    yield all([
        call(watchSetCurrentUser),
        call(watchLogoutUser)
    ])
}