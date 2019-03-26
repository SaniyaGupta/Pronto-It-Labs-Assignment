import LOGIN_CONSTANTS from './loginConstants'
import { createAction } from '../../common/createAction'
import axios from 'axios';

export function login(loginData, props) {
    return async dispatch => {
        try {
            const response = await axios.post(' https://api.prontoitlabs.com/api/v1/user/login ', { userName: loginData.username, password: loginData.password });
            if (response.data) {
                dispatch(createSession(response.data.data, props))
            }
        } catch (err) {
            if(err.response){
                dispatch(createAction(LOGIN_CONSTANTS.SET_LOGIN_ERROR, err.response.data));
            }
            else{
                dispatch(createAction(LOGIN_CONSTANTS.SET_LOGIN_ERROR, err));
            }
        }
    };
}

export function createSession(session, props) {
    return async dispatch => {
        try {
            const stringifySession = JSON.stringify(session)
            window.localStorage.setItem('session', stringifySession)
            dispatch(createAction(LOGIN_CONSTANTS.CREATE_SESSION, { session, isAuthenticated: true }))
            props.history.replace('/users');
        }
        catch (err) {
            dispatch(createAction(LOGIN_CONSTANTS.SET_LOGIN_ERROR, err));
        }
    };
}
export function deleteSession(){
    return async dispatch => {
        try {
            localStorage.removeItem('session');
            dispatch(createAction(LOGIN_CONSTANTS.DELETE_SESSION))
        }
        catch (err) {
            dispatch(createAction(LOGIN_CONSTANTS.SET_LOGIN_ERROR, err));
        }
    };
}