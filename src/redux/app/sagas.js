import {all, put, takeLatest, call} from 'redux-saga/effects';
import {SEND, SEND_FAIL, SEND_SUCCESS} from "./action";
import ApiClient from "../../services/ApiClient";

const apiClient = new ApiClient();


function sendToApi(message) {
  return apiClient.post('message', message);
}

function* sendMessage(action) {
  try {
    const sendRequest = yield call(sendToApi, action.payload);
    yield put({type: SEND_SUCCESS, result: sendRequest});

  } catch (e) {
    yield put({type: SEND_FAIL, errors: e});
  }
}

const appSagas = all([
  takeLatest(SEND, sendMessage),
]);

export default appSagas;