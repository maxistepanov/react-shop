import {combineReducers} from 'redux';
import {SEND, SEND_FAIL, SEND_SUCCESS} from "./action";


const app = (state = [], action) => {
  switch (action.type) {

    case SEND:
      return state;
    case SEND_SUCCESS:
      return {
        ...action.result,
      };
    case SEND_FAIL:
      return state;
    default:
      console.log('default', action);
      return state
  }
};

export default combineReducers({
  app,
})