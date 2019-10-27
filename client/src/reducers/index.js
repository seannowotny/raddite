import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import redirectReducer from './redirectReducer';

export default combineReducers({
   redirectState: redirectReducer,
   boardState: boardReducer
});