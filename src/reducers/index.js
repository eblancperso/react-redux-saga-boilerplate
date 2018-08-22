import { combineReducers } from 'redux';

import authentication from './authentication';

// Put all other reducers here.
const rootReducer = combineReducers({
  authentication
});

export default rootReducer;