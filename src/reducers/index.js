import { combineReducers } from 'redux'
import login from '../containers/Login/loginReducer'
import registration from '../containers/Registeration/registerReducer'
import users from '../containers/Users/usersReducer'

export default combineReducers({
    login,
    registration,
    users
})