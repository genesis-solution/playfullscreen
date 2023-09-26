import { userActions } from "./actions";

export class UsersState {
  constructor() {
    this.user = null;
    this.error = "";
    this.status = "";
    this.purchases = null;
    this.admissions = null;
  }
}

export function UserReducer(state = new UsersState(), { payload, type }) {
  switch (type) {
    case userActions.REQUEST:
      return {
        ...state,
        status: 'request_pending'
      };
    case userActions.GET_USER_FULFILED:
      return {
        ...state,
        user: payload.resp,
        status: 'get_user_request_success'
      };    
    case userActions.GET_USER_ERROR:
      return {
        ...state,
        error: payload.error,
        status: 'get_user_request_fail'
      };  
    case userActions.UPDATE_USER_FULFILED:
      return {
        ...state,
        user: payload.resp,
        status: 'update_user_request_success'
      };    
    case userActions.UPDATE_USER_ERROR:
      return {
        ...state,
        error: payload.error,
        status: 'update_user_request_fail'
      };    
    case userActions.CLEAR_ERROR:
      return {
        ...state,
        error: "",
        status: ''
      };
    case userActions.SUCCESS_USER_PURCHASE:
      return {
        ...state,
        purchases: payload.resp.data,
      };
    case userActions.FAIL_USER_PURCHASE:
      return {
        ...state,
        error: payload.error,
        status: 'get_purchase_history_fail'
      };
    case userActions.SUCCESS_USER_ADMISSION:
      return {
        ...state,
        admissions: payload.resp.data,
      };
    case userActions.FAIL_USER_ADMISSION:
      return {
        ...state,
        error: payload.error,
        status: 'get_admission_history_fail'
      };
    default:
      return {
        ...state,
      };
  }
}
