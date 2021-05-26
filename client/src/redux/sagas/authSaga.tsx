import axios, { AxiosResponse } from 'axios';
import { call, put, takeEvery, all, fork } from 'redux-saga/effects';

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
} from '../types';

import {
    IApiLoginRequest,
    ApiUserLoadingRequest,
    ApiRegisterRequest,
    ApiMemberWarnRequest,
    ApiMemberWarnlistRequest,
    ApiMemberRemovewarnmemberRequest,
} from '../actions/AuthActions';

import { 
    IApiLoginResult, 
    IApiRegisterResult, 
    IApiUserLoadingResult, 
    IApiMemberWarnResult, 
    IApiMemberWarnlistResult, 
    IApiWarnMemberRemoveResult 
} from '../interfaces/IApi.interfaces';

// Login

const loginUserAPI = (loginData: object) => {
    console.log(loginData, 'loginData');
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return axios.post('/api/auth', loginData, config);
};

function* loginUser(action: IApiLoginRequest) {
    try {
        const result: AxiosResponse<IApiLoginResult> = yield call(loginUserAPI, action.payload);
        console.log(result);
        yield put({
            type: LOGIN_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: LOGIN_FAILURE,
            payload: e.response,
        });
    }
}

function* watchLoginUser() {
    yield takeEvery(LOGIN_REQUEST, loginUser);
}

// LOGOUT

function* logout() {
    try {
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

function* watchlogout() {
    yield takeEvery(LOGOUT_REQUEST, logout);
}

// Register

const registerUserAPI = (payload: object) => {
    console.log(payload, 'regiterData');

    return axios.post('/api/user', payload);
};

function* registerUser(action: ApiRegisterRequest) {
    try {
        const result: AxiosResponse<IApiRegisterResult> = yield call(registerUserAPI, action.payload);
        console.log(result, 'RegisterUser Data');
        yield put({
            type: REGISTER_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: REGISTER_FAILURE,
            payload: e.response,
        });
    }
}

function* watchregisterUser() {
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

function* watchclearError() {
    yield takeEvery(CLEAR_ERROR_REQUEST, clearError);
}

// User Loading

const userLoadingAPI = (token: object) => {
    console.log(token);

    const config: any = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return axios.get('/api/auth/user', config);
};

function* userLoading(action: ApiUserLoadingRequest) {
    try {
        console.log(action, 'userLoading');
        const result: AxiosResponse<IApiUserLoadingResult> = yield call(userLoadingAPI, action.payload);
        yield put({
            type: USER_LOADING_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: USER_LOADING_FAILURE,
            payload: e.response,
        });
    }
}

function* watchuserLoading() {
    yield takeEvery(USER_LOADING_REQUEST, userLoading);
}

interface IActPayload {
    token: string;
    warndata: string;
}
const memberWarnAPI = (payload: IActPayload) => {
    console.log(payload);

    const config: any = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const token = payload.token;

    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return axios.post('/api/user/warn', payload, config);
};

function* memberWarn(action: ApiMemberWarnRequest) {
    try {
        console.log(action, 'warn');
        const result: AxiosResponse<IApiMemberWarnResult> = yield call(memberWarnAPI, action.payload);
        console.log(result.data, 'warn');
        yield put({
            type: MEMBER_WARN_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: MEMBER_WARN_FAILURE,
            payload: e.response,
        });
    }
}

function* watchmemberWarn() {
    yield takeEvery(MEMBER_WARN_REQUEST, memberWarn);
}

// Member Warn list
interface IActWarndata {
    warnListsId: string[];
    list: any;
    page: number;
    size: number;
}
interface IActItem {
    id: string;
    quantity: number;
}
interface IActDetail {
    _id: string;
}
const memberWarnListAPI = (data: IActWarndata) => {
    console.log(data, 'data');

    const warnListsId = data.warnListsId;
    const list = data.list;
    const page = data.page;
    const size = data.size;

    return axios.get(`/api/user/warnlist?id=${warnListsId}&type=array&page=${page}&size=${size}`).then((response) => {
        console.log(response.data);
        list.forEach((listItem: IActItem) => {
            response.data.warndata.forEach((listDetail: IActDetail, index: React.Key) => {
                if (listItem.id === listDetail._id) {
                    response.data.warndata[index].quantity = listItem.quantity;
                }
            });
        });
        return response.data;
    });
};

function* memberWarnList(action: ApiMemberWarnlistRequest) {
    try {
        const result: AxiosResponse<IApiMemberWarnlistResult> = yield call(memberWarnListAPI, action.payload);
        console.log(result);
        yield put({
            type: MEMBER_WARNLIST_SUCCESS,
            payload: result,
        });
    } catch (e) {
        yield put({
            type: MEMBER_WARNLIST_FAILURE,
            payload: e.response,
        });
    }
}

function* watchmemberWarnList() {
    yield takeEvery(MEMBER_WARNLIST_REQUEST, memberWarnList);
}

interface IActWarnRemoveData {
    token: string;
    id: string;
}
interface IActRemoveItem {
    id: string;
    quantity: number;
}
interface IActRemoveList {
    _id: string;
}
const removeWarnmemberAPI = (payload: IActWarnRemoveData) => {
    console.log(payload);

    const config: any = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const token = payload.token;
    const id = payload.id;

    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return axios.get(`/api/user/removeWarnMember?id=${id}`, config).then((response) => {
        response.data.cart.forEach((item: IActRemoveItem) => {
            response.data.listInfo.forEach((list: IActRemoveList, index: React.Key) => {
                if (item.id === list._id) {
                    response.data.listInfo[index].quantity = item.quantity;
                }
            });
        });
        return response.data;
    });
};

function* removeWarnmember(action: ApiMemberRemovewarnmemberRequest) {
    try {
        console.log(action, 'remove');
        const result: AxiosResponse<IApiWarnMemberRemoveResult> = yield call(removeWarnmemberAPI, action.payload);
        yield put({
            type: MEMBER_REMOVEWARNMEMBER_SUCCESS,
            payload: result,
        });
    } catch (e) {
        yield put({
            type: MEMBER_REMOVEWARNMEMBER_FAILURE,
            payload: e.response,
        });
    }
}

function* watchremoveWarnmember() {
    yield takeEvery(MEMBER_REMOVEWARNMEMBER_REQUEST, removeWarnmember);
}

export default function* authSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchlogout),
        fork(watchuserLoading),
        fork(watchregisterUser),
        fork(watchclearError),
        fork(watchmemberWarn),
        fork(watchmemberWarnList),
        fork(watchremoveWarnmember),
    ]);
}
