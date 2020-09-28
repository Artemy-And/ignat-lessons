import {applyMiddleware, combineReducers, createStore,compose} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./user-reducer";
import authReducer from "./auth-reducer";
// import thunkMiddleware from "react-redux-typescript"
// import thunkMiddleware from "react-redux"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {loginReducer} from "./login-reducer";
import appReducer from "./app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    loginPage:loginReducer,
    app:appReducer
})

// import { createStore, applyMiddleware, compose } from 'redux';
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)
));

// let store = createStore(reducers,applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof reducers>
// @ts-ignore
window.store = store;

export default store