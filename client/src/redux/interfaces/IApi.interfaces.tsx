
// Auth Store
export interface IApiLoginResult {
    token: string;
    user: { id: string; role: string };
}
export interface IApiRegisterResult {
    token: string; 
    user: { id: string; role: string }
}
export interface IApiUserLoadingResult {
    _id: string; 
    name: string; role: string
}
export interface IApiMemberWarnResult {
    success: boolean
}
export interface IApiMemberWarnlistResult {
     totalItems: number;
     warndata: object; 
     totalPages: number; 
     currentPage: number;
}
export interface IApiWarnMemberRemoveResult {
    listInfo: object; cart: object
}

// Member Store
export interface IApiMemberUploadingResult {
    success: boolean;
}
export interface IApiMemberListResult {
    totalItems: number; memberdata: object; totalPages: number; currentPage: number;
}
export interface IApiMemberDeleteResult {
    success: boolean;
}
export interface IApiMemberSingleListResult {
    images: object; message: string;
}
export interface IApiMemberUpdateListResult {
    message: string;
}
export interface IApiMemberInquiriesResult {
    totalItems: number; inquiriesdata: object; totalPages: number; currentPage: number; chatalldata: object;
}
export interface IApiMemberRemoveInquiriesResult {
    success: boolean;
}
export interface IApiAllDataResult {
    memberalldata: object;
}
