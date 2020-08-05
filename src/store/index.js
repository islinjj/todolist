import { createStore, combineReducers } from 'redux';
import todoReducer from '../reducers/todoReducer';
import loadingReducer from '../reducers/loadingReducer';

const store = createStore(combineReducers({todoReducer,loadingReducer}));

export default store