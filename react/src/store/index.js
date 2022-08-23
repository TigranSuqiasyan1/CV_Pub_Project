import { applyMiddleware, createStore } from "redux";
import rootReducers from "./rootReducers";
import createSagaMiddleware from 'redux-saga'
import mySaga from "./saga/saga";

const saga = createSagaMiddleware()
const myStore = createStore(rootReducers, applyMiddleware(saga))
saga.run(mySaga);

export default myStore;