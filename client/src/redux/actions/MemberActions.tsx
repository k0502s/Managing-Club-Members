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
    ALL_DATA_REQUEST,
    ALL_DATA_SUCCESS,
    ALL_DATA_FAILURE,
    CLEAR_ERROR_REQUEST_1,
    CLEAR_ERROR_SUCCESS_1,
    CLEAR_ERROR_FAILURE_1,
} from '../types';

export interface IApiMemberUploadingRequest {
    type: typeof MEMBER_UPLOADING_REQUEST;
    payload: { writer: string; name: string; camera: string; age: number; sex: number; images: object };
}
export interface IApiMemberUploadingSuccess {
    type: typeof MEMBER_UPLOADING_SUCCESS;
    payload: { success: boolean };
}
export interface IApiMemberUploadingFailure {
    type: typeof MEMBER_UPLOADING_FAILURE;
    payload: { success: boolean };
}
export interface IApiMemberListRequest {
    type: typeof MEMBER_LIST_REQUEST;
    payload: { params: { name: string; size: number; page: number } };
}
export interface IApiMemberListSuccess {
    type: typeof MEMBER_LIST_SUCCESS;
    payload: { totalItems: number; memberdata: object; totalPages: number; currentPage: number };
}
export interface IApiMemberListFailure {
    type: typeof MEMBER_LIST_FAILURE;
    payload: { totalItems: number; memberlist: object; totalPages: number; currentPage: number };
}
export interface IApiMemberDeleteRequest {
    type: typeof MEMBER_DELETE_REQUEST;
    payload: { id: string; };
}
export interface IApiMemberDeleteSuccess {
    type: typeof MEMBER_DELETE_SUCCESS;
    payload: { success: boolean };
}
export interface IApiMemberDeleteFailure {
    type: typeof MEMBER_DELETE_FAILURE;
    payload: { success: boolean };
}
export interface IApiMemberSingleListRequest {
    type: typeof MEMBER_SINGLELIST_REQUEST;
    payload: { id: string };
}
export interface IApiMemberSingleListSuccess {
    type: typeof MEMBER_SINGLELIST_SUCCESS;
    payload: { images: object; message: string };
}
export interface IApiMemberSingleListFailure {
    type: typeof MEMBER_SINGLELIST_FAILURE;
    payload: { images: object; message: string };
}
export interface IApiMemberUpdateListRequest {
    type: typeof MEMBER_UPDATELIST_REQUEST;
    payload: { id: string; writer: string; name: string; camera: string; age: number; sex: number; images: object };
}
export interface IApiMemberUpdateListSuccess {
    type: typeof MEMBER_UPDATELIST_SUCCESS;
    payload: { message: string };
}
export interface IApiMemberUpdateListFailure {
    type: typeof MEMBER_UPDATELIST_FAILURE;
    payload: { message: string };
}
export interface IApiMemberInquiriesRequest {
    type: typeof MEMBER_INQUIRIES_REQUEST;
    payload: { params: { size: number; page: number } };
}
export interface IApiMemberInquiriesSuccess {
    type: typeof MEMBER_INQUIRIES_SUCCESS;
    payload: { totalItems: number; inquiriesdata: object; totalPages: number; currentPage: number; chatalldata: object };
}
export interface IApiMemberInquiriesFailure {
    type: typeof MEMBER_INQUIRIES_FAILURE;
    payload: { totalItems: number; inquiriesdata: object; totalPages: number; currentPage: number; chatalldata: object };
}
export interface IApiMemberRemoveInquiriesRequest {
    type: typeof MEMBER_REMOVE_INQUIRIES_REQUEST;
    payload: { id: string; };
}
export interface IApiMemberRemoveInquiriesSuccess {
    type: typeof MEMBER_REMOVE_INQUIRIES_SUCCESS;
    payload: { success: boolean; };
}
export interface IApiMemberRemoveInquiriesFailure {
    type: typeof MEMBER_REMOVE_INQUIRIES_FAILURE;
    payload: { success: boolean; };
}
export interface IApiAllDataRequest {
    type: typeof ALL_DATA_REQUEST;
}
export interface IApiAllDataSuccess {
    type: typeof ALL_DATA_SUCCESS;
    payload: { memberalldata: object; };
}
export interface IApiAllDataFailure {
    type: typeof ALL_DATA_FAILURE;
}
export interface IApiClearErrorRequest {
    type: typeof CLEAR_ERROR_REQUEST_1;
}
export interface IApiClearErrorSuccess {
    type: typeof CLEAR_ERROR_SUCCESS_1;
    payload: object;
}
export interface IApiClearErrorFailure {
    type: typeof CLEAR_ERROR_FAILURE_1;
    payload: object;
}

export type Actions =
    | IApiMemberUploadingRequest
    | IApiMemberUploadingSuccess
    | IApiMemberUploadingFailure
    | IApiMemberListRequest
    | IApiMemberListSuccess
    | IApiMemberListFailure
    | IApiMemberDeleteRequest
    | IApiMemberDeleteSuccess
    | IApiMemberDeleteFailure
    | IApiMemberSingleListRequest
    | IApiMemberSingleListSuccess
    | IApiMemberSingleListFailure
    | IApiMemberUpdateListRequest
    | IApiMemberUpdateListSuccess
    | IApiMemberUpdateListFailure
    | IApiMemberInquiriesRequest
    | IApiMemberInquiriesSuccess
    | IApiMemberInquiriesFailure
    | IApiMemberRemoveInquiriesRequest
    | IApiMemberRemoveInquiriesSuccess
    | IApiMemberRemoveInquiriesFailure
    | IApiAllDataRequest
    | IApiAllDataSuccess
    | IApiAllDataFailure
    | IApiClearErrorRequest
    | IApiClearErrorSuccess
    | IApiClearErrorFailure;
