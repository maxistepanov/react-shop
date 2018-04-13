import {all, put, takeLatest, call} from 'redux-saga/effects';
import {SEND, SEND_FAIL, SEND_SUCCESS} from "./action";
import MessageService from "../../services/Message.service";


function sendToApi(message) {
  return MessageService.sendMessage(message);
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