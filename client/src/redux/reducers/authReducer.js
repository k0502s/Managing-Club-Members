import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    CLEAR_ERROR_REQUEST,
    CLEAR_ERROR_SUCCESS,
    CLEAR_ERROR_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    USER_LOADING_REQUEST,
    USER_LOADING_SUCCESS,
    USER_LOADING_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    MEMBER_WARN_REQUEST,
    MEMBER_WARN_SUCCESS,
    MEMBER_WARN_FAILURE,
    MEMBER_WARNLIST_REQUEST,
    MEMBER_WARNLIST_SUCCESS,
    MEMBER_WARNLIST_FAILURE,
    MEMBER_REMOVEWARNMEMBER_REQUEST,
    MEMBER_REMOVEWARNMEMBER_SUCCESS,
    MEMBER_REMOVEWARNMEMBER_FAILURE,
} from '../types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: '',
    userId: '',
    userName: '',
    userRole: '',
    errorMsg: '',
    successMsg: '',
    previousMatchMsg: '',
    editsuccess: false,
    warnlistDetail: '',
    removeWarnMember: '',
    totalItems: '',
    memberlist: '',
    totalPages: '',
    currentPage: '',
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case LOGOUT_REQUEST:
            return {
                ...state,
                errorMsg: '',
                isLoading: true,
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                userId: action.payload.user.id,
                userRole: action.payload.user.role,
                errorMsg: '',
                warnlistDetail: '',
            };

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case LOGOUT_FAILURE:
            localStorage.removeItem('token');
            return {
                ...state,
                ...action.payload,
                token: null,
                user: null,
                userId: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: null,
                errorMsg: action.payload.data.msg,
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                token: null,
                user: null,
                userId: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: null,
                errorMsg: '',
            };
        case USER_LOADING_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case USER_LOADING_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
                userId: action.payload._id,
                userName: action.payload.name,
                userRole: action.payload.role,
            };
        case USER_LOADING_FAILURE:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: '',
            };
        case CLEAR_ERROR_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case CLEAR_ERROR_SUCCESS:
            return {
                ...state,
                errorMsg: '',
                previousMatchMsg: '',
                warnlistDetail: '',
                totalItems: '',
                totalPages: '',
                currentPage: '',
                isLoading: false,
            };
        case CLEAR_ERROR_FAILURE:
            return {
                ...state,
                errorMsg: 'Clear Error Fail',
                previousMatchMsg: 'Clear Error Fail',
                isLoading: false,
            };

        case MEMBER_WARN_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case MEMBER_WARN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: {
                    ...state.user,
                    cart: action.payload,
                },
            };
        case MEMBER_WARN_FAILURE:
            return {
                ...state,
                isLoading: false,
                user: {
                    ...state.user,
                    cart: '',
                },
            };

        case MEMBER_WARNLIST_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case MEMBER_WARNLIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                totalItems: action.payload.totalItems,
                warnlistDetail: action.payload.warndata,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage,
            };
        case MEMBER_WARNLIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                totalItems: '',
                warnlistDetail: '',
                totalPages: '',
                currentPage: '',
            };

        case MEMBER_REMOVEWARNMEMBER_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case MEMBER_REMOVEWARNMEMBER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                warnlistDetail: action.payload.listInfo,
                user: {
                    ...state.user,
                    cart: action.payload.cart,
                },
                removeWarnMember: true,
            };
        case MEMBER_REMOVEWARNMEMBER_FAILURE:
            return {
                ...state,
                isLoading: false,
                warnlistDetail: '',
                removeWarnMember: false,
            };

        default:
            return state;
    }
};

export default authReducer;
