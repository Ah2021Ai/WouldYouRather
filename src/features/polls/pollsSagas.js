import { put, call, takeLatest, all } from "redux-saga/effects"
import { getPolls } from "../../utils/api"
import {showLoading, hideLoading} from "react-redux-loading-bar"

function* fetchPolls() {
    let polls;
    try {
        yield put(showLoading())
        polls = yield call(getPolls)
        yield put({
            type: 'polls/receivePolls',
            payload: {polls: polls}
        })
    } finally {
        yield put(hideLoading())
    }
}

function* watchFetchPolls() {
    yield takeLatest('polls/pollsFetch', fetchPolls)
}

function* removePolls() {
    yield put({type: "polls/emptyPolls"})
}

function* watchUserLogedOut() {
    yield takeLatest('polls/removePolls', removePolls)
}

export default function* pollsSagas() {
    yield all([
        call(watchFetchPolls),
        call(watchUserLogedOut)
    ])
}