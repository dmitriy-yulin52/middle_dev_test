import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {authReducer} from "./components/auth/auth-reducer";

const rootReducers = combineReducers({
    auth: authReducer
})


export const store = createStore(rootReducers, applyMiddleware(thunk));
export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = ReturnType<typeof store.dispatch>;


// @ts-ignore
window.store = store



