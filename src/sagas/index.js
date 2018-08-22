import { all, fork } from 'redux-saga/effects';

import watcherSignInSaga from './authentication';

// Put all other sagas here.
export default function* root() {
    yield all([
        fork(watcherSignInSaga),
    ]);
}