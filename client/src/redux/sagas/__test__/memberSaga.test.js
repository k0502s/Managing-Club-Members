import { expectSaga } from 'redux-saga-test-plan';
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
    MEMBER_REMOVE_INQUIRIES_REQUEST,
    MEMBER_REMOVE_INQUIRIES_SUCCESS,
    MEMBER_REMOVE_INQUIRIES_FAILURE,
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
    isLoading: ''
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
                isLoading: false
            };
        case MEMBER_UPLOADING_FAILURE:
            return {
                ...state,
                errorMsg: 'error',
                success: false,
                isLoading: false
            };

        // case MEMBER_LIST_REQUEST:
        //     return {
        //         ...state,
        //         errorMsg: '',
        //         isLoading: true,
        //     };
        // case MEMBER_LIST_SUCCESS:
        //     return {
        //         ...state,
        //         totalItems: action.payload.totalItems,
        //         memberlist: action.payload.memberdata,
        //         totalPages: action.payload.totalPages,
        //         currentPage: action.payload.currentPage,
        //     };
        // case MEMBER_LIST_FAILURE:
        //     return {
        //         ...state,
        //         errorMsg: 'error',
        //         totalItems: '',
        //         memberlist: '',
        //         totalPages: '',
        //         currentPage: '',
        //     };
        // case MEMBER_INQUIRIES_REQUEST:
        //     return {
        //         ...state,
        //         errorMsg: '',
        //         isLoading: true,
        //     };
        // case MEMBER_INQUIRIES_SUCCESS:
        //     return {
        //         ...state,
        //         totalItems: action.payload.totalItems,
        //         inquiriesdata: action.payload.inquiriesdata,
        //         totalPages: action.payload.totalPages,
        //         currentPage: action.payload.currentPage,
        //         chatalldata: action.payload.chatalldata
        //     };
        // case MEMBER_INQUIRIES_FAILURE:
        //     return {
        //         ...state,
        //         errorMsg: 'error',
        //         totalItems: '',
        //         inquiriesdata: '',
        //         totalPages: '',
        //         currentPage: '',
        //         chatalldata: ''
        //     };
        // case MEMBER_DELETE_REQUEST:
        //     return {
        //         ...state,
        //         errorMsg: '',
        //         isLoading: true,
        //     };
        // case MEMBER_DELETE_SUCCESS:
        //     return {
        //         ...state,
        //         deletesuccess: action.payload.success,
        //     };
        // case MEMBER_DELETE_FAILURE:
        //     return {
        //         ...state,
        //         errorMsg: 'error',
        //         deletesuccess: action.payload.success,
        //     };
        // case MEMBER_SINGLELIST_REQUEST:
        //     return {
        //         ...state,
        //         errorMsg: '',
        //         isLoading: true,
        //     };
        // case MEMBER_SINGLELIST_SUCCESS:
        //     return {
        //         ...state,
        //         singlememberlist: action.payload,
        //         singlememberimage: action.payload.images,
        //     };
        // case MEMBER_SINGLELIST_FAILURE:
        //     return {
        //         ...state,
        //         errorMsg: 'error',
        //         singlememberlist: action.payload.message,
        //         singlememberimage: '',
        //     };

        // case MEMBER_UPDATELIST_REQUEST:
        //     return {
        //         ...state,
        //         errorMsg: '',
        //         isLoading: true,
        //     };
        // case MEMBER_UPDATELIST_SUCCESS:
        //     return {
        //         ...state,
        //         singlememberlist: '',
        //         updatelist: action.payload.message,
        //     };
        // case MEMBER_UPDATELIST_FAILURE:
        //     return {
        //         ...state,
        //         errorMsg: 'error',
        //         updatelist: action.payload.message,
        //     };

        default:
            return state;
    }
};

export default memberReducer;

// uploading

const memberuploadAPI = (memberData) => {
    console.log(memberData, 'memberData');

    return axios.post('api/member', memberData);
};

function* memberUpload(action) {
    try {
        const result = yield call(memberuploadAPI, action.payload);
        yield put({
            type: MEMBER_UPLOADING_SUCCESS,
            payload: true,
        });
    } catch (e) {
        yield put({
            type: MEMBER_UPLOADING_FAILURE,
            payload: e.response,
        });
    }
}

function* watchMenberUpload() {
    yield takeEvery(MEMBER_UPLOADING_REQUEST, memberUpload);
}

// // Member list get

// const memberlistAPI = (memberData) => {
//     console.log(memberData, 'memberData');

//     return axios.get('api/member', memberData);
// };

// function* memberList(action) {
//     try {
//         const result = yield call(memberlistAPI, action.payload);
//         console.log(result);
//         yield put({
//             type: MEMBER_LIST_SUCCESS,
//             payload: result.data,
//         });
//     } catch (e) {
//         yield put({
//             type: MEMBER_LIST_FAILURE,
//             payload: e.response,
//         });
//     }
// }

// function* watchMemberList() {
//     yield takeEvery(MEMBER_LIST_REQUEST, memberList);
// }

// // Member list single get

// const membersinglelistAPI = (memberData) => {
//     console.log(memberData, 'memberData');

//     return axios.get(`api/member/${memberData}`);
// };

// function* memberSingleList(action) {
//     try {
//         const result = yield call(membersinglelistAPI, action.payload);
//         console.log(result);
//         yield put({
//             type: MEMBER_SINGLELIST_SUCCESS,
//             payload: result.data,
//         });
//     } catch (e) {
//         yield put({
//             type: MEMBER_SINGLELIST_FAILURE,
//             payload: e.response,
//         });
//     }
// }

// function* watchMemberSingleList() {
//     yield takeEvery(MEMBER_SINGLELIST_REQUEST, memberSingleList);
// }

// // Member list update

// const memberupdateAPI = (memberData) => {
//     console.log(memberData, 'memberData');

//     return axios.put(`api/member/${memberData.id}`, memberData);
// };

// function* memberUpdate(action) {
//     try {
//         const result = yield call(memberupdateAPI, action.payload);
//         console.log(result);
//         yield put({
//             type: MEMBER_UPDATELIST_SUCCESS,
//             payload: result.data,
//         });
//         yield all([put(push('/list'))]);
//     } catch (e) {
//         yield put({
//             type: MEMBER_UPDATELIST_FAILURE,
//             payload: e.response,
//         });
//     }
// }

// function* watchMemberUpdate() {
//     yield takeEvery(MEMBER_UPDATELIST_REQUEST, memberUpdate);
// }

// // Member delete

// const memberdeleteAPI = (memberData) => {
//     return axios.delete(`api/member/${memberData}`);
// };

// function* memberDelete(action) {
//     try {
//         const result = yield call(memberdeleteAPI, action.payload);
//         console.log(result);
//         yield put({
//             type: MEMBER_DELETE_SUCCESS,
//             payload: result.data,
//         });
//     } catch (e) {
//         yield put({
//             type: MEMBER_DELETE_FAILURE,
//             payload: e.response,
//         });
//     }
// }

// function* watchMemberDelete() {
//     yield takeEvery(MEMBER_DELETE_REQUEST, memberDelete);
// }

// // Member inqirie

// const memberinqiriesAPI = (memberData) => {
//     console.log(memberData, 'inqiries');
//     return axios.get('api/inquiries/', memberData);
// };

// function* memberInqiries(action) {
//     try {
//         const result = yield call(memberinqiriesAPI, action.payload);
//         console.log(result);
//         yield put({
//             type: MEMBER_INQUIRIES_SUCCESS,
//             payload: result.data,
//         });
//     } catch (e) {
//         yield put({
//             type: MEMBER_INQUIRIES_FAILURE,
//             payload: e.response,
//         });
//     }
// }

// function* watchMemberInqiries() {
//     yield takeEvery(MEMBER_INQUIRIES_REQUEST, memberInqiries);
// }

// // Delete Member Inqiries

// const deletememberinqiriesAPI = (memberData) => {
//     return axios.delete(`api/inquiries/${memberData}`);
// };

// function* Deletememberinqiries(action) {
//     try {
//         const result = yield call(deletememberinqiriesAPI, action.payload);
//         console.log(result);
//         yield put({
//             type: MEMBER_REMOVE_INQUIRIES_SUCCESS,
//             payload: result.data,
//         });
//     } catch (e) {
//         yield put({
//             type: MEMBER_REMOVE_INQUIRIES_FAILURE,
//             payload: e.response,
//         });
//     }
// }

// function* watchDeleteMemberInqiries() {
//     yield takeEvery(MEMBER_REMOVE_INQUIRIES_REQUEST, Deletememberinqiries);
// }

describe('redux saga test', () => {
    it('find Upload success => ', () => {
        const data = true;
        return (
            expectSaga(watchMenberUpload)
                .withReducer(memberReducer)
                .dispatch({ type: MEMBER_UPLOADING_REQUEST, payload: data  })
                .provide([[call(memberuploadAPI, data), true]])
                .put({ type: MEMBER_UPLOADING_SUCCESS, payload: data })
                .hasFinalState({
                    errorMsg: '',
                    success: data,
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
                    isLoading: false
                })
                .silentRun()
        );
    });
});
