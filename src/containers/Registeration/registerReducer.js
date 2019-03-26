import initialState from './registerInitialState';
import REGISTRATION_CONSTANTS from './registerConstants'


export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTRATION_CONSTANTS.SET_REGISTRATION_ERROR:
            return state.set('registrationError', action.payload);
        default:
            return state;
    }

}