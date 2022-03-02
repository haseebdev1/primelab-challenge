import {put} from 'redux-saga/effects';
import {SET_USERS} from './actions';

export default function* fetchUser() {
  yield put({type: SET_USERS, payload: []});
}
