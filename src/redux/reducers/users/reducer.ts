import {AnyAction} from 'redux';
import {SET_USERS} from './actions';
import User from '../../../interfaces/User';
const initial_state: User[] = [];

export default (state = initial_state, action: AnyAction) => {
  switch (action.type) {
    case SET_USERS:
      return [...action.payload];

    default:
      return state;
  }
};
