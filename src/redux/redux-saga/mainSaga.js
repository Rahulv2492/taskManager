import { all } from 'redux-saga/effects';
import { loginSaga } from './loginSaga';


export default function* MainSaga() {
    try {
        yield all([...loginSaga])
    }
    catch (error) {
    }
}