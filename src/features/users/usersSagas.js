import {all, call, put, takeLatest} from "redux-saga/effects"
import { getUsers } from "../../utils/api";

function* fetchUser() {
    try {
        const users = yield call(getUsers)
        yield put({
            type: 'users/receiveUsers',
            payload: {users: users}
        })
    } catch (error) {
        
    }
}

function* watchFetchUsers() {
    yield takeLatest("users/usersFetch", fetchUser)
}

export default function* usersSagas() {
    yield all([
        call(watchFetchUsers)
    ])
}