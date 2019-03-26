import REGISTRATION_CONSTANTS from './registerConstants'
import { createAction } from '../../common/createAction'
import axios from 'axios';
import { createSession } from '../Login/loginAction'

export function register(registerData,props) {
    return async dispatch => {
        try {

            const response = await axios.post('https://api.prontoitlabs.com/api/v1/user', { userName: registerData.username, password: registerData.password, gender: registerData.gender });
            if (response.data) {
                dispatch(createSession(response.data.data,props))
            }
        } catch (err) {
            dispatch(createAction(REGISTRATION_CONSTANTS.SET_REGISTRATION_ERROR, err.response.data));
        }
    };
}