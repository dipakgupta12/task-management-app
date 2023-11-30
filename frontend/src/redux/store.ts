// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // You can use any middleware you prefer
import { authReducer } from './reducer';

const store = createStore(authReducer, applyMiddleware(thunk));

export default store;
