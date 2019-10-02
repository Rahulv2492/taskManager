import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import MainSaga from './redux-saga/mainSaga';
import LoginReducer from './reducers/LoginReducer';
import TaskListReducer from './reducers/TaskListReducer';

const sagaMiddleware = createSagaMiddleware()

const appReducer = combineReducers({
    LoginReducer,
    TaskListReducer
});

let store = createStore(appReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(MainSaga);


export default store;
