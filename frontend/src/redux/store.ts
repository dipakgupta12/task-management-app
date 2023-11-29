// store.ts
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import taskReducer from './reducers/taskReducer';

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  user: userReducer,
  task: taskReducer,
});

// Middleware setup (Thunk middleware in this case)
const middleware = [thunk];

// Redux DevTools Extension setup
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
