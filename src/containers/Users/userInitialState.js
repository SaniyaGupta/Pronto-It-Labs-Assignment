import { Record } from 'immutable';

const InitialState = Record({
    userError: {},
    paginationDetails:{
        currentPage:0,
        currentPageSize:50,
        totalPages:1
    },
    userData:null
});

export default new InitialState();
