import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import api from '../mock/api';
import { watchLoginUser, watchlogout, watchregisterUser, watchuserLoading, watchmemberWarn, watchmemberWarnList, watchremoveWarnmember } from '../mock/MockauthSaga';
import authReducer from '../mock/MockauthReducer';
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

const state = {
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

describe('redux saga test', () => {
    it('로그인 성공 => ', () => {
        const data = {
            token: 'test1234',
            user: {
                id: 1234,
                name: '김진석',
                email: 'k0502s@naver.com',
                role: 'User',
            },
        };
        return expectSaga(watchLoginUser)
            .withReducer(authReducer)
            .dispatch({ type: LOGIN_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: LOGIN_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                isAuthenticated: true,
                isLoading: false,
                userId: 1234,
                userRole: 'User',
                errorMsg: '',
                warnlistDetail: '',
            })
            .silentRun();
    });
    it('로그인 실패 => ', () => {
        const data = {
            token: 'test1234',
            user: {
                id: 1234,
                name: '김진석',
                email: 'k0502s@naver.com',
                role: 'User',
            },
        };
        const error = new Error('Whoops');
        return expectSaga(watchLoginUser)
            .withReducer(authReducer)
            .dispatch({ type: LOGIN_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: LOGIN_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                token: null,
                user: null,
                userId: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: null,
                errorMsg: false,
            })
            .silentRun();
    });

    it('로그아웃 성공 => ', () => {
        return expectSaga(watchlogout)
            .withReducer(authReducer)
            .dispatch({ type: LOGOUT_REQUEST })
            .provide([[call(api.fetchTest), true]])
            .put({ type: LOGOUT_SUCCESS })
            .hasFinalState({
                token: null,
                user: null,
                userId: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: null,
                errorMsg: '',
            })
            .silentRun();
    });
    it('로그아웃 실패 => ', () => {
        const error = new Error('Whoops');
        return expectSaga(watchlogout)
            .withReducer(authReducer)
            .dispatch({ type: LOGOUT_REQUEST })
            .provide([[call(api.fetchTest), throwError(error)]])
            .put({ type: LOGOUT_FAILURE })
            .hasFinalState({
                ...state,
                token: null,
                user: null,
                userId: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: null,
                errorMsg: false,
            })
            .silentRun();
    });

    it('회원가입 성공 => ', () => {
        const data = {
            token: 'test1234',
            user: {
                id: 1234,
                name: '김진석',
                email: 'k0502s@naver.com',
            },
        };
        return expectSaga(watchregisterUser)
            .withReducer(authReducer)
            .dispatch({ type: REGISTER_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: REGISTER_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                isAuthenticated: true,
                isLoading: false,
                userId: 1234,
                userRole: 'User',
                errorMsg: '',
                warnlistDetail: '',
            })
            .silentRun();
    });
    it('회원가입 실패 => ', () => {
        const data = {
            token: 'test1234',
            user: {
                id: 1234,
                name: '김진석',
                email: 'k0502s@naver.com',
            },
        };
        const error = new Error('Whoops');
        return expectSaga(watchregisterUser)
            .withReducer(authReducer)
            .dispatch({ type: REGISTER_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: REGISTER_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                token: null,
                user: null,
                userId: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: null,
                errorMsg: false,
            })
            .silentRun();
    });

    it('유저 정보 가져오기 성공 => ', () => {
        const data = {
            user: {
                id: 1234,
                name: '김진석',
                email: 'k0502s@naver.com',
            },
        };
        return expectSaga(watchuserLoading)
            .withReducer(authReducer)
            .dispatch({ type: USER_LOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: USER_LOADING_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: {
                    id: 1234,
                    name: '김진석',
                    role: 'User',
                },
                userId: 1234,
                userName: '김진석',
                userRole: 'User',
            })
            .silentRun();
    });
    it('유저 정보 가져오기 실패 => ', () => {
        const data = {
            user: {
                id: 1234,
                name: '김진석',
                email: 'k0502s@naver.com',
            },
        };
        const error = new Error('Whoops');
        return expectSaga(watchuserLoading)
            .withReducer(authReducer)
            .dispatch({ type: USER_LOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: USER_LOADING_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                userRole: '',
            })
            .silentRun();
    });

    it('경보한 유저 업로드 성공 => ', () => {
        const data = {
            cart: {
                id: 1234,
                quantity: 1,
                date: '2021.04.05',
            },
        };
        return expectSaga(watchmemberWarn)
            .withReducer(authReducer)
            .dispatch({ type: MEMBER_WARN_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: MEMBER_WARN_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                user: {
                    id: 1234,
                    name: '김진석',
                    role: 'User',
                    cart: {
                        id: 1234,
                        quantity: 1,
                        date: '2021.04.05',
                    },
                },
                isLoading: false,
            })
            .silentRun();
    });
    it('경보한 유저 업로드 실패 => ', () => {
        const data = {
            cart: {
                id: 1234,
                quantity: 1,
                date: '2021.04.05',
            },
        };
        const error = new Error('Whoops');
        return expectSaga(watchmemberWarn)
            .withReducer(authReducer)
            .dispatch({ type: MEMBER_WARN_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: MEMBER_WARN_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                user: {
                    id: 1234,
                    name: '김진석',
                    role: 'User',
                    cart: '',
                },
                isLoading: false,
            })
            .silentRun();
    });

    it('경고 유저 정보 가져오기 성공 => ', () => {
        const data = {
            totalItems: 1,
            warndata: {
                id: 1234,
                name: '김진석',
                sex: 1,
            },
            totalPages: 1,
            currentPage: 1,
        };
        return expectSaga(watchmemberWarnList)
            .withReducer(authReducer)
            .dispatch({ type: MEMBER_WARNLIST_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: MEMBER_WARNLIST_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                totalItems: 1,
                warndata: {
                    id: 1234,
                    name: '김진석',
                    sex: 1,
                },
                totalPages: 1,
                currentPage: 1,
                isLoading: false,
            })
            .silentRun();
    });
    it('경고 유저 정보 가져오기 실패 => ', () => {
        const data = {
            totalItems: 1,
            warndata: {
                id: 1234,
                name: '김진석',
                sex: 1,
            },
            totalPages: 1,
            currentPage: 1,
        };
        const error = new Error('Whoops');
        return expectSaga(watchmemberWarnList)
            .withReducer(authReducer)
            .dispatch({ type: MEMBER_WARNLIST_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: MEMBER_WARNLIST_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                totalItems: '',
                warnlistDetail: '',
                totalPages: '',
                currentPage: '',
                isLoading: false,
            })
            .silentRun();
    });

    it('경고 유저 정보 삭제 성공 => ', () => {
        const data = {
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
        };
        return expectSaga(watchremoveWarnmember)
            .withReducer(authReducer)
            .dispatch({ type: MEMBER_REMOVEWARNMEMBER_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: MEMBER_REMOVEWARNMEMBER_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                isLoading: false,
                warnlistDetail: {
                    name: '김진석',
                    sex: 1,
                    camera: 'a7s2',
                },
                user: {
                    id: 1234,
                    name: '김진석',
                    role: 'User',
                    cart: {
                        id: 1234,
                        quantity: 1,
                        date: '2021.04.05',
                    },
                },
                removeWarnMember: true,
            })
            .silentRun();
    });
    it('경고 유저 정보 삭제 실패 => ', () => {
        const data = {
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
        };
        const error = new Error('Whoops');
        return expectSaga(watchremoveWarnmember)
            .withReducer(authReducer)
            .dispatch({ type: MEMBER_REMOVEWARNMEMBER_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: MEMBER_REMOVEWARNMEMBER_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                isLoading: false,
                warnlistDetail: '',
                removeWarnMember: false,
            })
            .silentRun();
    });
});
