import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'


import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducer";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware()

const composedEnhancer = composeWithDevTools(
    applyMiddleware(sagaMiddleware)
)   

const store = createStore(
    rootReducer,
    composedEnhancer
    )

sagaMiddleware.run(rootSaga)

export default store
