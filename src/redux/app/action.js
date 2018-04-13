export const APP = '[App] APP';
export const APP_FAIL = '[App] APP_FAIL';

export const SEND = '[App] SEND';
export const SEND_SUCCESS = '[App] SEND_SUCCESS';
export const SEND_FAIL = '[App] SEND_FAIL';


export function send (message) {
  return {
    type: SEND,
    payload:{message}
  }
}