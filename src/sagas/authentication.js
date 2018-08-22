import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from '../constants/ActionTypes';

// This generator function will run and take the latest dispatched SIGN_IN_REQUEST.
export default function* watcherSignInSaga() {
    yield takeLatest(SIGN_IN_REQUEST, workerSignInSaga);
}

// This generator function accepts a payload (with email and password), calls the API and dispatch a success or a failure
function* workerSignInSaga({ payload }) {
    try {
        const response = yield call(() => signIn(payload));
        const user = response.data[0];

        yield put({ type: SIGN_IN_SUCCESS, user });
    } catch (error) {
        yield put({ type: SIGN_IN_FAILURE, error });
    }
}

// We don't use the email and password since this is an example.
const signIn = ({ email, password }) =>
    axios.get(`https://jsonplaceholder.typicode.com/users?email=Sincere@april.biz`);
