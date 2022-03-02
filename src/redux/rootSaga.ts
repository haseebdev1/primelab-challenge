import {takeLatest} from 'redux-saga/effects';
import {GET_USERS} from './reducers/users/actions';
import fetchUsers from './reducers/users/sagas';

function* mySaga() {
  yield takeLatest(GET_USERS, fetchUsers);
}

export default mySaga;
