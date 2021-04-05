import axios from 'axios';
import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
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
} from '../../types';
import '@babel/polyfill';

const initialState = {
    errorMsg: '',
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
    isLoading: '',
};

const memberReducer = (state = initialState, action) => {
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
                success: true,
                singlememberlist: '',
                isLoading: false,
            };
        case MEMBER_UPLOADING_FAILURE:
            return {
                ...state,
                errorMsg: 'error',
                success: false,
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
                totalItems: 1,
                memberdata: { name: '김진석', cmaera: 'a7s2' },
                totalPages: 1,
                currentPage: 1,
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
                isLoading: true,
            };
        case MEMBER_INQUIRIES_SUCCESS:
            return {
                ...state,
                totalItems: 1,
                inquiriesdata: { name: '김진석', email: 'k0502s@naver.com', opinion: '문의사항' },
                totalPages: 1,
                currentPage: 1,
                chatalldata: 1,
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
                deletesuccess: true,
                isLoading: false,
            };
        case MEMBER_DELETE_FAILURE:
            return {
                ...state,
                errorMsg: 'error',
                deletesuccess: false,
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
                singlememberlist: { name: '김진석', cmaera: 'a7s2' },
                singlememberimage: { images: 'testimage' },
                isLoading: false,
            };
        case MEMBER_SINGLELIST_FAILURE:
            return {
                ...state,
                errorMsg: 'error',
                singlememberlist: false,
                singlememberimage: '',
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
                singlememberlist: '',
                updatelist: true,
                isLoading: false,
            };
        case MEMBER_UPDATELIST_FAILURE:
            return {
                ...state,
                errorMsg: 'error',
                updatelist: false,
                isLoading: false,
            };

        default:
            return state;
    }
};

export default memberReducer;
