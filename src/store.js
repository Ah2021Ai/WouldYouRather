import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'


import createSagaMiddleware from "redux-saga";
import { loadingBarMiddleware } from 'react-redux-loading-bar'

import rootReducer from "./reducer";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware()
const loadingBarMW = loadingBarMiddleware()

const composedEnhancer = composeWithDevTools(
    applyMiddleware(sagaMiddleware, loadingBarMW)
)   

const store = createStore(
    rootReducer,
    composedEnhancer
    )

sagaMiddleware.run(rootSaga)

export default store
