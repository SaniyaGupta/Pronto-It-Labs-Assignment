import initialState from './loginInitialState';
import LOGIN_CONSTANTS from './loginConstants'
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_CONSTANTS.CREATE_SESSION:
            return state.set('session', action.payload.session).set('isAuthenticated', action.payload.isAuthenticated);
        case LOGIN_CONSTANTS.SET_LOGIN_ERROR:
            return state.set('loginError', action.payload);
        case LOGIN_CONSTANTS.DELETE_SESSION:
            return state.set('isAuthenticated', initialState.isAuthenticated)
            .set('session', initialState.session)
            .set('loginError', initialState.loginError);
        default:
            return state;
    }

}