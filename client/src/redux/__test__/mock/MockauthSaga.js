import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import '@babel/polyfill';
import api from './api';
import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    USER_LOADING_SUCCESS,
    USER_LOADING_FAILURE,
    USER_LOADING_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    CLEAR_ERROR_SUCCESS,
    CLEAR_ERROR_FAILURE,
    CLEAR_ERROR_REQUEST,
    MEMBER_WARN_REQUEST,
    MEMBER_WARN_SUCCESS,
    MEMBER_WARN_FAILURE,
    MEMBER_WARNLIST_REQUEST,
    MEMBER_WARNLIST_SUCCESS,
    MEMBER_WARNLIST_FAILURE,
    MEMBER_REMOVEWARNMEMBER_REQUEST,
    MEMBER_REMOVEWARNMEMBER_SUCCESS,
    MEMBER_REMOVEWARNMEMBER_FAILURE,
} from '../../types';
// Login

function* loginUser(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        console.log(result);
        yield put({
            type: LOGIN_SUCCESS,
            payload: {
                token: 'test1234',
                user: {
                    id: 1234,
                    name: '김진석',
                    email: 'k0502s@naver.com',
                    role: 'User',
                },
            },
        });
    } catch (e) {
        yield put({
            type: LOGIN_FAILURE,
            payload: false,
        });
    }
}

export function* watchLoginUser() {
    yield takeEvery(LOGIN_REQUEST, loginUser);
}

// LOGOUT

function* logout(action) {
    try {
        const result = yield call(api.fetchTest);
        yield put({
            type: LOGOUT_SUCCESS,
        });
    } catch (e) {
        yield put({
            type: LOGOUT_FAILURE,
        });
        console.log(e);
    }
}

export function* watchlogout() {
    yield takeEvery(LOGOUT_REQUEST, logout);
}

// Register

function* registerUser(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        console.log(result, 'RegisterUser Data');
        yield put({
            type: REGISTER_SUCCESS,
            payload: {
                token: 'test1234',
                user: {
                    id: 1234,
                    name: '김진석',
                    email: 'k0502s@naver.com',
                },
            },
        });
    } catch (e) {
        yield put({
            type: REGISTER_FAILURE,
            payload: false,
        });
    }
}

export function* watchregisterUser() {
    yield takeEvery(REGISTER_REQUEST, registerUser);
}

// clear Error

function* clearError() {
    try {
        yield put({
            type: CLEAR_ERROR_SUCCESS,
        });
    } catch (e) {
        yield put({
            type: CLEAR_ERROR_FAILURE,
        });
        console.error(e);
    }
}

export function* watchclearError() {
    yield takeEvery(CLEAR_ERROR_REQUEST, clearError);
}

// User Loading

function* userLoading(action) {
    try {
        console.log(action, 'userLoading');
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: USER_LOADING_SUCCESS,
            payload: {
                user: {
                    id: 1234,
                    name: '김진석',
                    email: 'k0502s@naver.com',
                },
            },
        });
    } catch (e) {
        yield put({
            type: USER_LOADING_FAILURE,
            payload: false,
        });
    }
}

export function* watchuserLoading() {
    yield takeEvery(USER_LOADING_REQUEST, userLoading);
}

function* memberWarn(action) {
    try {
        console.log(action, 'warn');
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: MEMBER_WARN_SUCCESS,
            payload: {
                cart: {
                    id: 1234,
                    quantity: 1,
                    date: '2021.04.05',
                },
            },
        });
    } catch (e) {
        yield put({
            type: MEMBER_WARN_FAILURE,
            payload: false,
        });
    }
}

export function* watchmemberWarn() {
    yield takeEvery(MEMBER_WARN_REQUEST, memberWarn);
}

// Member Warn list

function* memberWarnList(action) {
    try {
        const result = yield call(api.fetchTest, action.payload);
        console.log(result);
        yield put({
            type: MEMBER_WARNLIST_SUCCESS,
            payload: {
                totalItems: 1,
                warndata: {
                    id: 1234,
                    name: '김진석',
                    sex: 1,
                },
                totalPages: 1,
                currentPage: 1,
            },
        });
    } catch (e) {
        yield put({
            type: MEMBER_WARNLIST_FAILURE,
            payload: false,
        });
    }
}

export function* watchmemberWarnList() {
    yield takeEvery(MEMBER_WARNLIST_REQUEST, memberWarnList);
}

function* removeWarnmember(action) {
    try {
        console.log(action, 'remove');
        const result = yield call(api.fetchTest, action.payload);
        yield put({
            type: MEMBER_REMOVEWARNMEMBER_SUCCESS,
            payload: {
                cart: {
                    id: 1234,
                    quantity: 1,
                    date: '2021.04.05',
                },
                listInfo: {
                    name: '김진석',
                    sex: 1,
                    camera: 'a7s2',
                },
            },
        });
    } catch (e) {
        yield put({
            type: MEMBER_REMOVEWARNMEMBER_FAILURE,
            payload: false,
        });
    }
}

export function* watchremoveWarnmember() {
    yield takeEvery(MEMBER_REMOVEWARNMEMBER_REQUEST, removeWarnmember);
}
