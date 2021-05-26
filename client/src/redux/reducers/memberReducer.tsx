import {
    MEMBER_UPLOADING_REQUEST,
    MEMBER_UPLOADING_SUCCESS,
    MEMBER_UPLOADING_FAILURE,
    MEMBER_LIST_REQUEST,
    MEMBER_LIST_SUCCESS,
    MEMBER_LIST_FAILURE,
    MEMBER_DELETE_REQUEST,
    MEMBER_DELETE_SUCCESS,
    MEMBER_DELETE_FAILURE,
    MEMBER_SINGLELIST_REQUEST,
    MEMBER_SINGLELIST_SUCCESS,
    MEMBER_SINGLELIST_FAILURE,
    MEMBER_UPDATELIST_REQUEST,
    MEMBER_UPDATELIST_SUCCESS,
    MEMBER_UPDATELIST_FAILURE,
    MEMBER_INQUIRIES_REQUEST,
    MEMBER_INQUIRIES_SUCCESS,
    MEMBER_INQUIRIES_FAILURE,
    ALL_DATA_REQUEST,
    ALL_DATA_SUCCESS,
    ALL_DATA_FAILURE,
    CLEAR_ERROR_REQUEST_1,
    CLEAR_ERROR_SUCCESS_1,
    CLEAR_ERROR_FAILURE_1,
} from '../types';
import { Actions } from '../actions/MemberActions';

type state = {
    errorMsg: string;
    previousMatchMsg: string;
    success: string;
    totalItems: number;
    memberlist: object;
    inquiriesdata: object;
    chatalldata: object;
    singlememberlist: object;
    singlememberimage: object;
    updatelist: string;
    totalPages: number;
    currentPage: number;
    deletesuccess: boolean;
    membertoltal: object;
    isLoading: boolean;
    isLoading2: boolean;
};
const initialState: state = {
    errorMsg: '',
    previousMatchMsg: '',
    success: '',
    totalItems: 0,
    memberlist: [],
    inquiriesdata: [],
    chatalldata: [],
    singlememberlist: {},
    singlememberimage: [],
    updatelist: '',
    totalPages: 0,
    currentPage: 0,
    deletesuccess: false,
    membertoltal: [],
    isLoading: false,
    isLoading2: false,
};


const memberReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case MEMBER_UPLOADING_REQUEST:
            return {
                ...state,
                errorMsg: '',
                isLoading: true,
            };
        case MEMBER_UPLOADING_SUCCESS:
            return {
                ...state,
                success: action.payload.success,
                singlememberlist: {},
                isLoading: false,
            };
        case MEMBER_UPLOADING_FAILURE:
            return {
                ...state,
                errorMsg: 'error',
                success: action.payload.success,
                isLoading: false,
            };

        case MEMBER_LIST_REQUEST:
            return {
                ...state,
                errorMsg: '',
                isLoading: true,
            };
        case MEMBER_LIST_SUCCESS:
            return {
                ...state,
                totalItems: action.payload.totalItems,
                memberlist: action.payload.memberdata,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage,
                isLoading: false,
            };
        case MEMBER_LIST_FAILURE:
            return {
                ...state,
                errorMsg: 'error',
                totalItems: 0,
                memberlist: [],
                totalPages: 0,
                currentPage: 0,
                isLoading: false,
            };
        case MEMBER_INQUIRIES_REQUEST:
            return {
                ...state,
                errorMsg: '',
                isLoading: true,
            };
        case MEMBER_INQUIRIES_SUCCESS:
            return {
                ...state,
                totalItems: action.payload.totalItems,
                inquiriesdata: action.payload.inquiriesdata,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage,
                chatalldata: action.payload.chatalldata,
                isLoading: false,
            };
        case MEMBER_INQUIRIES_FAILURE:
            return {
                ...state,
                errorMsg: 'error',
                totalItems: 0,
                inquiriesdata: [],
                totalPages: 0,
                currentPage: 0,
                chatalldata: [],
                isLoading: false,
            };
        case MEMBER_DELETE_REQUEST:
            return {
                ...state,
                errorMsg: '',
                isLoading: true,
            };
        case MEMBER_DELETE_SUCCESS:
            return {
                ...state,
                deletesuccess: action.payload.success,
                isLoading: false,
            };
        case MEMBER_DELETE_FAILURE:
            return {
                ...state,
                errorMsg: 'error',
                deletesuccess: action.payload.success,
                isLoading: false,
            };
        case MEMBER_SINGLELIST_REQUEST:
            return {
                ...state,
                errorMsg: '',
                isLoading: true,
            };
        case MEMBER_SINGLELIST_SUCCESS:
            return {
                ...state,
                singlememberlist: action.payload,
                singlememberimage: action.payload.images,
                isLoading: false,
            };
        case MEMBER_SINGLELIST_FAILURE:
            return {
                ...state,
                errorMsg: 'error',
                singlememberlist: action.payload.message,
                singlememberimage: [],
                isLoading: false,
            };

        case MEMBER_UPDATELIST_REQUEST:
            return {
                ...state,
                errorMsg: '',
                isLoading: true,
            };
        case MEMBER_UPDATELIST_SUCCESS:
            return {
                ...state,
                singlememberlist: {},
                updatelist: action.payload.message,
                isLoading: false,
            };
        case MEMBER_UPDATELIST_FAILURE:
            return {
                ...state,
                errorMsg: 'error',
                updatelist: action.payload.message,
                isLoading: false,
            };
        case ALL_DATA_REQUEST:
            return {
                ...state,
                errorMsg: '',
                isLoading: true,
            };
        case ALL_DATA_SUCCESS:
            return {
                ...state,
                singlememberlist: {},
                membertoltal: action.payload,
                isLoading: false,
            };
        case ALL_DATA_FAILURE:
            return {
                ...state,
                errorMsg: 'error',
                membertoltal: [],
                isLoading: false,
            };
        case CLEAR_ERROR_REQUEST_1:
            return {
                ...state,
                isLoading2: true,
            };
        case CLEAR_ERROR_SUCCESS_1:
            return {
                ...state,
                inquiriesdata: [],
                totalItems: 0,
                memberlist: [],
                totalPages: 0,
                currentPage: 0,
                isLoading2: false,
            };
        case CLEAR_ERROR_FAILURE_1:
            return {
                ...state,
                isLoading2: false,
            };

        default:
            return state;
    }
};

export default memberReducer;
