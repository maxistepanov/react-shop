import {all} from 'redux-saga/effects';
import appSagas from "./app/sagas";

function* rootSaga() {
  yield all([
    appSagas,

  ])
}


export default rootSaga;