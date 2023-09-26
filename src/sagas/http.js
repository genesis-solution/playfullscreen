import { call, fork, put, spawn, take } from "redux-saga/effects";
import { userActions } from "../store/user";
import { videoActions } from "../store/video";
import { request } from "../utils/http";

function* sendRequest(data) {
  try {
    const res = yield call(request, data);
    yield put(data.sucess(res.data));
  } catch (error) {
    yield put(data.error(error));
  }
}

//= ====================================
//  WATCHERS
// -------------------------------------

function* watchSendRequest() {
  while (true) {
    const { payload } = yield take(userActions.REQUEST);
    yield fork(sendRequest, { ...payload });
  }
}

function* watchSendRequestForVideo() {
  while (true) {
    const { payload } = yield take(videoActions.REQUEST);
    yield fork(sendRequest, { ...payload });
  }
}

//= ====================================
//  INIT SAGAS
// -------------------------------------

export const http = [spawn(watchSendRequest), spawn(watchSendRequestForVideo)];
