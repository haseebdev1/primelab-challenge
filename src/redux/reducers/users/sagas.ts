import {put, call} from 'redux-saga/effects';
import {SET_USERS} from './actions';
import axios from 'axios';

const requestUsers = () => {
  return axios.request({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users',
  });
};

export default function* fetchUser() {
  try {
    const result = yield call(requestUsers);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  yield put({type: SET_USERS, payload: []});
}
