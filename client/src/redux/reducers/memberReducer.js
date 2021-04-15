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
    CLEAR_ERROR_REQUEST_1,
    CLEAR_ERROR_SUCCESS_1,
    CLEAR_ERROR_FAILURE_1,
} from '../types';

const initialState = {
    errorMsg: '',
     previousMatchMsg:'',
    success: '',
    totalItems: '',
    memberlist: '',
    inquiriesdata: '',
    chatalldata: '',
    singlememberlist: '',
    singlememberimage: '',
    updatelist: '',
    totalPages: '',
    currentPage: '',
    deletesuccess: '',
};

const memberReducer = (state = initialState, action) => {
    switch (action.type) {
        case MEMBER_UPLOADING_REQUEST:
            return {
                ...state,
                errorMsg: '',
                memberlist:'',
                isLoading: true,
            };
        case MEMBER_UPLOADING_SUCCESS:
            return {
                ...state,
                success: action.payload.success,
                singlememberlist: '',
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
                memberlist:'',
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
                totalItems: '',
                memberlist: '',
                totalPages: '',
                currentPage: '',
                isLoading: false,
            };
        case MEMBER_INQUIRIES_REQUEST:
            return {
                ...state,
                errorMsg: '',
                memberlist:'',
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
                totalItems: '',
                inquiriesdata: '',
                totalPages: '',
                currentPage: '',
                chatalldata: '',
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
                singlememberimage: '',
                isLoading: false,
            };

        case MEMBER_UPDATELIST_REQUEST:
            return {
                ...state,
                errorMsg: '',
                memberlist:'',
                isLoading: true,
            };
        case MEMBER_UPDATELIST_SUCCESS:
            return {
                ...state,
                singlememberlist: '',
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
            case CLEAR_ERROR_REQUEST_1:
                return {
                    ...state,
                };
            case CLEAR_ERROR_SUCCESS_1:
                return {
                    ...state,
                    inquiriesdata:'',
                    totalItems: '',
                    memberlist: '',
                    totalPages: '',
                    currentPage: '',
                    
                };
            case CLEAR_ERROR_FAILURE_1:
                return {
                    ...state,
                };

        default:
            return state;
    }
};

export default memberReducer;
