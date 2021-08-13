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

export default function* currentUserSagas() {
    yield all([
        call(watchSetCurrentUser)
    ])
}