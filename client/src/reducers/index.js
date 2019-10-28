import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import redirectReducer from './redirectReducer';
import authReducer from './authReducer';

export default combineReducers({
   authState: authReducer,
   redirectState: redirectReducer,
   boardState: boardReducer
});