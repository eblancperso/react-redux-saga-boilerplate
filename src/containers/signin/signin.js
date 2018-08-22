import React from "react";
import { connect } from "react-redux";

import { SIGN_IN_REQUEST, SIGN_IN_EMAIL_CHANGED, SIGN_IN_PASSWORD_CHANGED } from '../../constants/ActionTypes';

const SignIn = ({ onRequestSignIn, onEmailChanged, onPasswordChanged, email, password, user, error, canRequestSignIn }) => {
    const { name } = user;
    return (
        <div>
            <label>Email</label>
            <input placeholder='joe@bloe.com' type='email' value={email} onChange={onEmailChanged} />
            <label>Password</label>
            <input placeholder='*****' type='password' value={password} onChange={onPasswordChanged} />
            <button disabled={!canRequestSignIn} type='submit' onClick={() => onRequestSignIn(email, password)}>Sign In</button>
            <br />
            {name}
            {error}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.authentication.user,
        error: state.authentication.error,
        email: state.authentication.email,
        password: state.authentication.password,
        canRequestSignIn: state.authentication.email.trim().length > 0 && state.authentication.password.trim().length > 0
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestSignIn: (email, password) => dispatch({ type: SIGN_IN_REQUEST, payload: { email, password } }),
        onEmailChanged: (event) => dispatch({ type: SIGN_IN_EMAIL_CHANGED, payload: { email: event.target.value } }),
        onPasswordChanged: (event) => dispatch({ type: SIGN_IN_PASSWORD_CHANGED, payload: { password: event.target.value } })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);