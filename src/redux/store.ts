import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {authReducer} from "./components/auth/auth-reducer";
import {ContactsViewReducer} from "./components/contacts-view/contacts-view-reducer";
import {ContactsFilterReducer} from "./components/contacts-filter/contacts-filter-reducer";

const rootReducers = combineReducers({
    auth: authReducer,
    contactsView:ContactsViewReducer,
    contactsFilter:ContactsFilterReducer
})


export const store = createStore(rootReducers, applyMiddleware(thunk));
export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType =typeof store.dispatch;


// @ts-ignore
window.store = store



