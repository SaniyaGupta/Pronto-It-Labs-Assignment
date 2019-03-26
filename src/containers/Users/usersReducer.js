import initialState from './userInitialState';
import USER_CONSTANTS from './userConstant'


export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case USER_CONSTANTS.SET_USER_DATA_AND_PAGINATION_DETAILS:
            return state.set('userData', action.payload.userData)
            .set('paginationDetails',action.payload.paginationDetails);
        case USER_CONSTANTS.SET_USER_ERROR:
            return state.set('userError', action.payload);
        default:
            return state;
    }

}