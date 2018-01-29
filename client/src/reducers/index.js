import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ui from './uiState';
import data from './dataState';
// import api from './apiState';

export default createStore(combineReducers({
	ui,
	data,
	// api,
}), applyMiddleware(thunk));
