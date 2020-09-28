import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA"


export type authType = {
    userId: any
    email: any
    login: any
    isAuth: boolean
}
export type dataType = {
    userId: string
    email: string
    login: string
    isAuth: boolean
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


function authReducer(state: authType = initialState, action: UserActionTypes): authType {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,

            }

        default:
            return state
    }


}

export const setUserData = (userId: any, email: any, login: any, isAuth: any): setUserDataType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const getAuthUserData = () => async (dispatch: Dispatch<any>) => {
    let data = await authAPI.me();
    if (data.data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setUserData(id, email, login, true))
    }

}

export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<any>) => {
    // dispatch(stopSubmit('login',{_error:'asdas'}));
    let res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: message}));

    }


}
export const loginOutTC = () => async (dispatch: Dispatch<any>) => {
    let res = await authAPI.logOut()
            if (res.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
}

type getAuthUserDataType = { getAuthUserData: () => void }


export type UserActionTypes = setUserDataType


type setUserDataType = {
    type: typeof SET_USER_DATA
    payload: dataType
    // userId:any,
    // email:any,
    // login:any,
    // isAuth:any
}


export default authReducer