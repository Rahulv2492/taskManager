import * as action_type from './../actions/LoginAction/ActionType';
import { connect } from 'react-redux';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {checkAccess} from './../../lib/api';

function* getAccessToken(action) {
    // try {
    //     yield put({ type: action_type.IS_FETCHING })
    //     const data = yield checkAccess(action.data);
    //     yield put({ type: action_type.API_CHECK_ACCESS_SUCCESS, data })
    // }
    // catch (err) {
    //     yield put({ type: action_type.API_CHECK_ACCESS_FAIL, data: err })
    // }
}
export const loginSaga = [
    takeEvery(action_type.API_CHECK_ACCESS_FETCH, getAccessToken),
]