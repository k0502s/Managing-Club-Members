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

export interface IApiLoginRequest {
    type: typeof LOGIN_REQUEST;
    payload: { email: string; password: string };
}
export interface ApiLoginSuccess {
    type: typeof LOGIN_SUCCESS;
    payload: { token: string; user: { id: string; role: string } };
}
export interface ApiLoginFailure {
    type: typeof LOGIN_FAILURE;
    payload: { data: { msg: String } };
}
export interface ApiClearErrorRequest {
    type: typeof CLEAR_ERROR_REQUEST;
}
export interface ApiClearErrorSuccess {
    type: typeof CLEAR_ERROR_SUCCESS;
}
export interface ApiClearErrorFailure {
    type: typeof CLEAR_ERROR_FAILURE;
}
export interface ApiLogoutRequest {
    type: typeof LOGOUT_REQUEST;
}
export interface ApiLogoutSuccess {
    type: typeof LOGOUT_SUCCESS;
}
export interface ApiLogoutFailure {
    type: typeof LOGOUT_FAILURE;
    payload: { data: { msg: String } };
}
export interface ApiUserLoadingRequest {
    type: typeof USER_LOADING_REQUEST;
    payload: { token: string };
}
export interface ApiUserLoadingSuccess {
    type: typeof USER_LOADING_SUCCESS;
    payload: { _id: string; name: string; role: string };
}
export interface ApiUserLoadingFailure {
    type: typeof USER_LOADING_FAILURE;
}
export interface ApiRegisterRequest {
    type: typeof REGISTER_REQUEST;
    payload: { email: string; password: string; name: string };
}
export interface ApiRegisterSuccess {
    type: typeof REGISTER_SUCCESS;
    payload: { token: string; user: { id: string; role: string } };
}
export interface ApiRegisterFailure {
    type: typeof REGISTER_FAILURE;
    payload: { data: { msg: String } };
}
export interface ApiMemberWarnRequest {
    type: typeof MEMBER_WARN_REQUEST;
    payload: { token: string; warndata: string };
}
export interface ApiMemberWarnSuccess {
    type: typeof MEMBER_WARN_SUCCESS;
    payload: { success: boolean};
}
export interface ApiMemberWarnFailure {
    type: typeof MEMBER_WARN_FAILURE;
}
export interface ApiMemberWarnlistRequest {
    type: typeof MEMBER_WARNLIST_REQUEST;
    payload: {
        warnListsId: string[];
        list: any;
        page: number;
        size: number;
    };
}
export interface ApiMemberWarnlistSuccess {
    type: typeof MEMBER_WARNLIST_SUCCESS;
    payload: { totalItems: number; warndata: object; totalPages: number; currentPage: number };
}
export interface ApiMemberWarnlistFailure {
    type: typeof MEMBER_WARNLIST_FAILURE;
}
export interface ApiMemberRemovewarnmemberRequest {
    type: typeof MEMBER_REMOVEWARNMEMBER_REQUEST;
    payload: {
        token: string;
        id: string;
    };
}
export interface ApiMemberRemovewarnmemberSuccess {
    type: typeof MEMBER_REMOVEWARNMEMBER_SUCCESS;
    payload: { listInfo: object; cart: object };
}
export interface ApiMemberRemovewarnmemberFailure {
    type: typeof MEMBER_REMOVEWARNMEMBER_FAILURE;
}

export type Actions =
    | IApiLoginRequest
    | ApiLoginSuccess
    | ApiLoginFailure
    | ApiClearErrorRequest 
    | ApiClearErrorSuccess 
    | ApiClearErrorFailure
    | ApiLogoutRequest
    | ApiLogoutSuccess
    | ApiLogoutFailure
    | ApiUserLoadingRequest
    | ApiUserLoadingSuccess
    | ApiUserLoadingFailure
    | ApiRegisterRequest
    | ApiRegisterSuccess
    | ApiRegisterFailure
    | ApiMemberWarnRequest
    | ApiMemberWarnSuccess
    | ApiMemberWarnFailure
    | ApiMemberWarnlistRequest
    | ApiMemberWarnlistSuccess
    | ApiMemberWarnlistFailure
    | ApiMemberRemovewarnmemberRequest
    | ApiMemberRemovewarnmemberSuccess
    | ApiMemberRemovewarnmemberFailure;
