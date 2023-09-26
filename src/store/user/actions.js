import { baseurl } from '../../const/const'

export const userActions = {
  REQUEST: '@@user/REQUEST',
  GET_USER_FULFILED: '@@user/GET_USER_FULFILED',
  GET_USER_ERROR: '@@user/GET_USER_ERROR',
  UPDATE_USER_FULFILED: '@@user/UPDATE_USER_FULFILED',
  UPDATE_USER_ERROR: '@@user/UPDATE_USER_ERROR',
  CLEAR_ERROR: '@@user/CLEAR_ERROR',

  SUCCESS_USER_PURCHASE: '@@user/SUCCESS_USER_PURCHASE',
  FAIL_USER_PURCHASE: '@@user/FAIL_USER_PURCHASE',

  SUCCESS_USER_ADMISSION: '@@user/SUCCESS_USER_ADMISSION',
  FAIL_USER_ADMISSION: '@@user/FAIL_USER_ADMISSION',
  

  updateUser: user => ({
    type: userActions.REQUEST,
    payload: {
      data: user,
      method: 'post',
      url: baseurl + '/users/updateUser',
      sucess: userActions.updateUserFulfilled,
      error: userActions.updateUserError
    }
  }),
  updateUserFulfilled: resp => (console.log(resp),{
    type: userActions.UPDATE_USER_FULFILED,
    payload: {resp}
  }),
  updateUserError: error => ({
    type: userActions.UPDATE_USER_ERROR,
    payload: {error}
  }),  

  getUserInfo: userId => ({
    type: userActions.REQUEST,
    payload: {
      data: {userId},
      method: 'post',
      url: baseurl + '/users/getUserById',
      sucess: userActions.getUserFulfilled,
      error: userActions.getUserError
    }
  }),
  getUserFulfilled: resp => ({
    type: userActions.GET_USER_FULFILED,
    payload: {resp}
  }),
  getUserError: error => ({
    type: userActions.GET_USER_ERROR,
    payload: {error}
  }),  

  clearError: () => ({
    type: userActions.CLEAR_ERROR
  }),

  getPurchases: () => ({
    type: userActions.REQUEST,
    payload: {
      method: 'get',
      url: baseurl + '/users/purchaseHistory',
      sucess: userActions.getPurchaseHistorySuccess,
      error: userActions.getPurchaseHistoryFail
    },
  }),
  getPurchaseHistorySuccess: resp => ({
    type: userActions.SUCCESS_USER_PURCHASE,
    payload: {resp}
  }),
  getPurchaseHistoryFail: error => ({
    type: userActions.FAIL_USER_PURCHASE,
    payload: { error }
  }),
  getAdmissions: () => ({
    type: userActions.REQUEST,
    payload: {
      method: 'get',
      url: baseurl + '/users/admissionHistory',
      sucess: userActions.getAdmissionHistorySuccess,
      error: userActions.getAdmissionHistoryFail
    },
  }),
  getAdmissionHistorySuccess: resp => ({
    type: userActions.SUCCESS_USER_ADMISSION,
    payload: {resp}
  }),
  getAdmissionHistoryFail: error => ({
    type: userActions.FAIL_USER_ADMISSION,
    payload: { error }
  })
}