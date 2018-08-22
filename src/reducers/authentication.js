import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_IN_EMAIL_CHANGED, SIGN_IN_PASSWORD_CHANGED } from '../constants/ActionTypes';

const initialState = {
    user: {},
    error: null,
    email: '',
    password: ''
};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return { ...state };
        case SIGN_IN_SUCCESS:
            return { ...state, user: action.user };
        case SIGN_IN_FAILURE:
            return { ...state, error: action.error };
        case SIGN_IN_EMAIL_CHANGED:
            return { ...state, email: action.payload.email };
        case SIGN_IN_PASSWORD_CHANGED:
            return { ...state, password: action.payload.password };
        default:
            return state;
    }
}
