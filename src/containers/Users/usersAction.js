
import USER_CONSTANTS from './userConstant'
import axios from 'axios';
import { createAction } from '../../common/createAction'

export function getUserData(pageNo, pageSize, authToken) {
    return async dispatch => {
        try {
            let config = {
                headers: { 'X-AUTH-TOKEN': authToken },
                params: { page: pageNo, size: pageSize },
            }
            const response = await axios.get('https://api.prontoitlabs.com/api/v1/user', config);
            const data = response.data.data;
            const formatedUserList=formatUserList(data.content)
            const payload = {
                userData: formatedUserList,
                paginationDetails: {
                    currentPage: data.currentPage,
                    currentPageSize: data.currentPageSize,
                    totalPages: data.totalPages
                }
            }
            dispatch(createAction(USER_CONSTANTS.SET_USER_DATA_AND_PAGINATION_DETAILS, payload));

            console.log(response.data)
        } catch (err) {
            dispatch(createAction(USER_CONSTANTS.SET_USER_ERROR, err.response.data));
        }
    };
}

function formatUserList(userList){
    userList.forEach(user => {
        user.key=user.id
    });
    return userList;
}