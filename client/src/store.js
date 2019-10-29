import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const initialState = {};

const middleware = [thunk];

const logger = createLogger({
   collapsed: true
});

const persistConfig = {
   key: 'root',
   storage: storage,
   stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
   pReducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware, logger))
);

export const persistor = persistStore(store);