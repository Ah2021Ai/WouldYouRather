import { call, put ,all, takeLatest } from "redux-saga/effects";

function* setCurrentUser(action) {
    try {
        yield put({
        type: 'currentUser/login',
        payload: action.payload
        })
    } finally {
        yield put({type: "polls/pollsFetch"})
    }
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

// import {
//     _getUsers,
//     _getTweets,
//     _saveLikeToggle,
//     _saveTweet,
//   } from './_DATA.js'
  
//   export function getInitialData () {
//     return Promise.all([
//       _getUsers(),
//       _getTweets(),
//     ]).then(([users, tweets]) => ({
//       users,
//       tweets,
//     }))
//   }
  
//   export function saveLikeToggle (info) {
//     return _saveLikeToggle(info)
//   }
  
//   export function saveTweet (info) {
//     return _saveTweet(info)
//   }