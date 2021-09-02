import { put, call, takeLatest, all } from "redux-saga/effects"
import {showLoading, hideLoading} from "react-redux-loading-bar"
import { handleFetchProducts } from "./pollsHelpers";
import { saveQuestion, saveQuestionAnswer } from "../../utils/api";

function* fetchPolls(action) {
    yield put(showLoading())
    const polls = yield call(handleFetchProducts)
    try {yield all([
        put({
        type: 'polls/receivePolls',
        payload: {polls: polls}
        }),
        put(hideLoading())
    ])} catch(e) {}
    finally {
        action.cb()
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

function* addNewPoll(action) {
    yield put(showLoading())
    const newPoll = yield call(saveQuestion, action.payload)
    yield all([
        put({
            type: 'polls/addNewPoll',
            payload: newPoll,
        }),
        put({
            type: "users/saveUserQuestion",
            payload: newPoll
        }),
        put({
            type: 'currentUser/saveCurrentUserQuestion',
            payload: newPoll
        }),
        put(hideLoading())
    ])
}

function* watchAddNewPoll() {
    yield takeLatest('polls/addNewPollStart', addNewPoll)
}

function* saveAnswer(action) {
    yield put(showLoading())
    try {
        yield call(saveQuestionAnswer, action.payload)
        yield all([
            put({
                type: "polls/saveQuestionAnswer",
                payload: action.payload
            }),
            put({
                type: 'user/saveUserAnswer',
                payload: action.payload
            }),
            put({
                type: "currentUser/saveCurrentUserAnswer",
                payload: action.payload
            }),
            put(hideLoading())
        ])
    } catch (error) {
        
    }
    
}

function* watchSaveQuestionAnswerStart() {
    yield takeLatest('polls/saveQuestionAnswerStart', saveAnswer)
}


export default function* pollsSagas() {
    yield all([
        call(watchFetchPolls),
        call(watchUserLogedOut),
        call(watchAddNewPoll),
        call(watchSaveQuestionAnswerStart)
    ])
}