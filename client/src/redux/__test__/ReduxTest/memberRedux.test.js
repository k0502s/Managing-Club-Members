import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import api from '../mock/api';
import { watchMenberUpload, watchMemberList, watchMemberSingleList, watchMemberUpdate, watchMemberDelete, watchMemberInqiries, watchDeleteMemberInqiries } from '../mock/MockmemberSaga';
import memberReducer from '../mock/MockmemberReducer';
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

const state = {
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

describe('redux saga test', () => {
    it('업로드 성공 => ', () => {
        const data = true;
        return expectSaga(watchMenberUpload)
            .withReducer(memberReducer)
            .dispatch({ type: MEMBER_UPLOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: MEMBER_UPLOADING_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                success: true,
                singlememberlist: '',
                isLoading: false,
            })
            .silentRun();
    });
    it('업로드 실패 => ', () => {
        const data = true;
        const error = new Error('Whoops');
        return expectSaga(watchMenberUpload)
            .withReducer(memberReducer)
            .dispatch({ type: MEMBER_UPLOADING_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: MEMBER_UPLOADING_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                errorMsg: 'error',
                success: false,
                isLoading: false,
            })
            .silentRun();
    });

    it('맴버 리스트 불러오기 성공 => ', () => {
        const data = {
            totalItems: 1,
            memberdata: { name: '김진석', cmaera: 'a7s2' },
            totalPages: 1,
            currentPage: 1,
        };
        return expectSaga(watchMemberList)
            .withReducer(memberReducer)
            .dispatch({ type: MEMBER_LIST_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: MEMBER_LIST_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                totalItems: 1,
                memberdata: { name: '김진석', cmaera: 'a7s2' },
                totalPages: 1,
                currentPage: 1,
                isLoading: false,
            })
            .silentRun();
    });
    it('맴버 리스트 불러오기 실패 => ', () => {
        const data = {
            totalItems: 1,
            memberdata: { name: '김진석', cmaera: 'a7s2' },
            totalPages: 1,
            currentPage: 1,
        };
        const error = new Error('Whoops');
        return expectSaga(watchMemberList)
            .withReducer(memberReducer)
            .dispatch({ type: MEMBER_LIST_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: MEMBER_LIST_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                errorMsg: 'error',
                totalItems: '',
                memberlist: '',
                totalPages: '',
                currentPage: '',
                isLoading: false,
            })
            .silentRun();
    });

    it('맴버 개별정보 불러오기 성공 => ', () => {
        const data = { name: '김진석', cmaera: 'a7s2' };
        return expectSaga(watchMemberSingleList)
            .withReducer(memberReducer)
            .dispatch({ type: MEMBER_SINGLELIST_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: MEMBER_SINGLELIST_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                singlememberlist: { name: '김진석', cmaera: 'a7s2' },
                singlememberimage: { images: 'testimage' },
                isLoading: false,
            })
            .silentRun();
    });
    it('맴버 개별정보 불러오기 실패 => ', () => {
        const data = { name: '김진석', cmaera: 'a7s2' };
        const error = new Error('Whoops');
        return expectSaga(watchMemberSingleList)
            .withReducer(memberReducer)
            .dispatch({ type: MEMBER_SINGLELIST_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: MEMBER_SINGLELIST_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                errorMsg: 'error',
                singlememberlist: false,
                singlememberimage: '',
                isLoading: false,
            })
            .silentRun();
    });

    it('맴버 개별정보 업데이트 성공 => ', () => {
        const data = true;
        return expectSaga(watchMemberUpdate)
            .withReducer(memberReducer)
            .dispatch({ type: MEMBER_UPDATELIST_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: MEMBER_UPDATELIST_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                singlememberlist: '',
                updatelist: true,
                isLoading: false,
            })
            .silentRun();
    });
    it('맴버 개별정보 업데이트 실패 => ', () => {
        const data = true;
        const error = new Error('Whoops');
        return expectSaga(watchMemberUpdate)
            .withReducer(memberReducer)
            .dispatch({ type: MEMBER_UPDATELIST_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: MEMBER_UPDATELIST_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                errorMsg: 'error',
                updatelist: false,
                isLoading: false,
            })
            .silentRun();
    });

    it('맴버 개별정보 삭제 성공 => ', () => {
        const data = true;
        return expectSaga(watchMemberDelete)
            .withReducer(memberReducer)
            .dispatch({ type: MEMBER_DELETE_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: MEMBER_DELETE_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                deletesuccess: true,
                isLoading: false,
            })
            .silentRun();
    });
    it('맴버 개별정보 삭제 실패 => ', () => {
        const data = true;
        const error = new Error('Whoops');
        return expectSaga(watchMemberDelete)
            .withReducer(memberReducer)
            .dispatch({ type: MEMBER_DELETE_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: MEMBER_DELETE_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                errorMsg: 'error',
                deletesuccess: false,
                isLoading: false,
            })
            .silentRun();
    });

    it('맴버 문의사항 불러오기 성공 => ', () => {
        const data = {
            totalItems: 1,
            inquiriesdata: { name: '김진석', email: 'k0502s@naver.com', opinion: '문의사항' },
            totalPages: 1,
            currentPage: 1,
            chatalldata: 1,
        };
        return expectSaga(watchMemberInqiries)
            .withReducer(memberReducer)
            .dispatch({ type: MEMBER_INQUIRIES_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: MEMBER_INQUIRIES_SUCCESS, payload: data })
            .hasFinalState({
                ...state,
                totalItems: 1,
                inquiriesdata: { name: '김진석', email: 'k0502s@naver.com', opinion: '문의사항' },
                totalPages: 1,
                currentPage: 1,
                chatalldata: 1,
                isLoading: false,
            })
            .silentRun();
    });
    it('맴버 문의사항 불러오기 실패 => ', () => {
        const data = {
            totalItems: 1,
            inquiriesdata: { name: '김진석', email: 'k0502s@naver.com', opinion: '문의사항' },
            totalPages: 1,
            currentPage: 1,
            chatalldata: 1,
        };
        const error = new Error('Whoops');
        return expectSaga(watchMemberInqiries)
            .withReducer(memberReducer)
            .dispatch({ type: MEMBER_INQUIRIES_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: MEMBER_INQUIRIES_FAILURE, payload: false })
            .hasFinalState({
                ...state,
                errorMsg: 'error',
                totalItems: '',
                inquiriesdata: '',
                totalPages: '',
                currentPage: '',
                chatalldata: '',
                isLoading: false,
            })
            .silentRun();
    });

    it('맴버 문의사항 삭제 성공 => ', () => {
        const data = true;
        return expectSaga(watchDeleteMemberInqiries)
            .dispatch({ type: MEMBER_REMOVE_INQUIRIES_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), true]])
            .put({ type: MEMBER_REMOVE_INQUIRIES_SUCCESS, payload: data })
            .silentRun();
    });
    it('맴버 문의사항 삭제 실패 => ', () => {
        const data = true;
        const error = new Error('Whoops');
        return expectSaga(watchDeleteMemberInqiries)
            .dispatch({ type: MEMBER_REMOVE_INQUIRIES_REQUEST, payload: data })
            .provide([[call(api.fetchTest, data), throwError(error)]])
            .put({ type: MEMBER_REMOVE_INQUIRIES_FAILURE, payload: false })
            .silentRun();
    });
});
