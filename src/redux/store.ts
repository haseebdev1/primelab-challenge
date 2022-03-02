import {createStore, combineReducers} from 'redux';
import usersReducer from './reducers/users/reducer';

const rootReducer = combineReducers({
  users: usersReducer,
});
const store = createStore(rootReducer);

export default store;
