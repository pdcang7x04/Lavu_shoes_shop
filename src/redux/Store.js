import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReducer from './Reducer'

const rootReducer = combineReducers({
    lavu: appReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;