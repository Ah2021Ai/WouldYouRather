import { put, call, takeLatest, all } from "redux-saga/effects"
import { getPolls } from "../../utils/api"

function* fetchPolls() {
    try {
        const polls = yield call(getPolls)
        yield put({
            type: 'polls/receivePolls',
            payload: {polls: polls}
        })
    } catch (error) {
        
    }
}

function* watchFetchPolls() {
    yield takeLatest('polls/pollsFetch', fetchPolls)
}

export default function* pollsSagas() {
    yield all([
        call(watchFetchPolls)
    ])
}