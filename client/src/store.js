import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const logger = createLogger({
   collapsed: true
});

const store = createStore(
   rootReducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware, logger))
);

export default store;