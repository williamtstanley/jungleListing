import { combineReducers, createStore } from 'redux';
import ui from './uiState';
import data from './dataState';
// import api from './apiState';

export default createStore(combineReducers({
	ui,
	data,
	// api,
}));
