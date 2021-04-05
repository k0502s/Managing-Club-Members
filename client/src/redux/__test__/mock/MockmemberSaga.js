import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import '@babel/polyfill';
import api from './api';
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
    MEMBER_REMOVE_INQUIRIES_REQUEST,
    MEMBER_REMOVE_INQUIRIES_SUCCESS,
    MEMBER_REMOVE_INQUIRIES_FAILURE,
} from '../../types';

// uploading

function* memberUpload(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: MEMBER_UPLOADING_SUCCESS,
            payload: true,
        });
    } catch (e) {
        yield put({
            type: MEMBER_UPLOADING_FAILURE,
            payload: false,
        });
    }
}

export function* watchMenberUpload() {
    yield takeEvery(MEMBER_UPLOADING_REQUEST, memberUpload);
}

// Member list get

function* memberList(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: MEMBER_LIST_SUCCESS,
            payload: {
                totalItems: 1,
                memberdata: { name: '김진석', cmaera: 'a7s2' },
                totalPages: 1,
                currentPage: 1,
            },
        });
    } catch (e) {
        yield put({
            type: MEMBER_LIST_FAILURE,
            payload: false,
        });
    }
}

export function* watchMemberList() {
    yield takeEvery(MEMBER_LIST_REQUEST, memberList);
}

// Member list single get

function* memberSingleList(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: MEMBER_SINGLELIST_SUCCESS,
            payload: {name:'김진석', cmaera:'a7s2'},
        });
    } catch (e) {
        yield put({
            type: MEMBER_SINGLELIST_FAILURE,
            payload: false,
        });
    }
}

export function* watchMemberSingleList() {
    yield takeEvery(MEMBER_SINGLELIST_REQUEST, memberSingleList);
}

// Member list update

function* memberUpdate(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: MEMBER_UPDATELIST_SUCCESS,
            payload: true,
        });
    } catch (e) {
        yield put({
            type: MEMBER_UPDATELIST_FAILURE,
            payload: false,
        });
    }
}

export function* watchMemberUpdate() {
    yield takeEvery(MEMBER_UPDATELIST_REQUEST, memberUpdate);
}

// Member delete

function* memberDelete(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: MEMBER_DELETE_SUCCESS,
            payload: true,
        });
    } catch (e) {
        yield put({
            type: MEMBER_DELETE_FAILURE,
            payload: false,
        });
    }
}

export function* watchMemberDelete() {
    yield takeEvery(MEMBER_DELETE_REQUEST, memberDelete);
}

// Member inqirie

function* memberInqiries(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: MEMBER_INQUIRIES_SUCCESS,
            payload: {
                totalItems: 1,
                inquiriesdata: {name: '김진석', email: 'k0502s@naver.com', opinion: '문의사항'},
                totalPages: 1,
                currentPage: 1,
                chatalldata: 1
            },
        });
    } catch (e) {
        yield put({
            type: MEMBER_INQUIRIES_FAILURE,
            payload: false,
        });
    }
}

export function* watchMemberInqiries() {
    yield takeEvery(MEMBER_INQUIRIES_REQUEST, memberInqiries);
}

// Delete Member Inqiries

function* Deletememberinqiries(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: MEMBER_REMOVE_INQUIRIES_SUCCESS,
            payload: true,
        });
    } catch (e) {
        yield put({
            type: MEMBER_REMOVE_INQUIRIES_FAILURE,
            payload: false,
        });
    }
}

export function* watchDeleteMemberInqiries() {
    yield takeEvery(MEMBER_REMOVE_INQUIRIES_REQUEST, Deletememberinqiries);
}
