import { Record } from 'immutable';

const InitialState = Record({
    isAuthenticated: false,
    session: null,
    loginError: {}
});

export default new InitialState();
