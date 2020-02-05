import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import postReducer from './post/reducer';

const rootReducer = combineReducers({
	post: postReducer,
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	undefined,
	enhancer(applyMiddleware(thunk)),
);

export default store;
