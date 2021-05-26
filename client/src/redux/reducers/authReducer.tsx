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
import { Actions } from '../actions/AuthActions';

type State = {
    token: string;
    isAuthenticated: boolean;
    isLoading: boolean;
    user: object;
    userId: string;
    userName: string;
    userRole: string;
    errorMsg: string;
    successMsg: string;
    previousMatchMsg: string;
    editsuccess: boolean;
    warnlistDetail: object;
    removeWarnMember: boolean;
    totalItems: number;
    totalPages: number;
    currentPage: number;
    warnlisttoltal: number;
};
const initialState: State = {
    token: '',
    isAuthenticated: false,
    isLoading: false,
    user: {},
    userId: '',
    userName: '',
    userRole: '',
    errorMsg: '',
    successMsg: '',
    previousMatchMsg: '',
    editsuccess: false,
    warnlistDetail: [],
    removeWarnMember: false,
    totalItems: 0,
    totalPages: 0,
    currentPage: 0,
    warnlisttoltal: 0,
};

const authReducer = (state = initialState, action: Actions) => {
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
                warnlistDetail: [],
            };

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case LOGOUT_FAILURE:
            localStorage.removeItem('token');
            return {
                ...state,
                ...action.payload,
                token: '',
                user: {},
                userId: '',
                isAuthenticated: false,
                isLoading: false,
                userRole: '',
                errorMsg: action.payload.data.msg,
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                token: '',
                user: {},
                userId: '',
                isAuthenticated: false,
                isLoading: false,
                userRole: '',
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
                user: {},
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
                warnlistDetail: [],
                totalItems: 0,
                totalPages: 0,
                currentPage: 0,
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
                    cart: [],
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
                warnlisttoltal: action.payload.totalItems,
            };
        case MEMBER_WARNLIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                totalItems: 0,
                warnlistDetail: [],
                totalPages: 0,
                currentPage: 0,
                warnlisttoltal: 0,
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
                warnlistDetail: [],
                removeWarnMember: false,
            };

        default:
            return state;
    }
};

export default authReducer;
