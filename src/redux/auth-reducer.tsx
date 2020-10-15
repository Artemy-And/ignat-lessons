import {authAPI, ResultCodesEnum, securityAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {setAppErrorAC} from "./app-reducer";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl:null
}


function authReducer(state: authType = initialState, action: UserActionTypes): authType {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,

            }
        case GET_CAPTCHAURL_SUCCESS:
            return {
                // ...state,captchaUrl:action.payload
                ...state,
                ...action.payload,
            }

        default:
            return state
    }


}
///////////*********ACTIONS**********//////////
export const setUserData = (userId: any, email: any, login: any, isAuth: any): setUserDataType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})
export const getCaptchaUrlAC = (captchaUrl:any): getCaptchaURLACType => ({
    type: GET_CAPTCHAURL_SUCCESS,
    payload: {captchaUrl}
})

export const getAuthUserData = () => async (dispatch: Dispatch<UserActionTypes>) => {
    let response = await authAPI.me();
    if (response.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = response.data
        dispatch(setUserData(id, email, login, true))
    }

}
///////////*********THUNK**********//////////
export const loginTC = (email: string, password: string, rememberMe: boolean,captcha:any) => async (dispatch: Dispatch<any>) => {
    // dispatch(stopSubmit('login',{_error:'asdas'}));
    let res = await authAPI.login(email, password, rememberMe,captcha)
    if (res.data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
        // let message = res.data.messages
        //     // [0]
        // dispatch(setAppErrorAC(message))
    } else {
        if (res.data.resultCode === ResultCodesEnum.CaptchaIsRequired){
            dispatch(getCaptchaUrlTC())
        }
        let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: message}));
        dispatch(setAppErrorAC(message))

    }


}
export const loginOutTC = () => async (dispatch: Dispatch<any>) => {
    let res = await authAPI.logOut()
            if (res.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
}

export const getCaptchaUrlTC = () => async (dispatch: Dispatch<any>) => {
    let res = await securityAPI.getCaptchaUrl()
    const captchaURL =  res.data.url
                dispatch(getCaptchaUrlAC(captchaURL))
            }

///////////*********TYPES**********//////////
const SET_USER_DATA = "social-network/auth/SET_USER_DATA"
const GET_CAPTCHAURL_SUCCESS = "social-network/auth/GET_CAPTCHAURL_SUCCESS"


export type authType = {
    userId: any
    email: any
    login: any
    isAuth: boolean
    captchaUrl:any
}
export type dataType = {
    userId: string
    email: string
    login: string
    isAuth: boolean
    captcha?:any
}


type getAuthUserDataType = { getAuthUserData: () => void }


export type UserActionTypes = setUserDataType|getCaptchaURLACType


type getCaptchaURLACType = {
    type: typeof GET_CAPTCHAURL_SUCCESS
    payload: any
    // userId:any,
    // email:any,
    // login:any,
    // isAuth:any
}
type setUserDataType = {
    type: typeof SET_USER_DATA
    payload: dataType
    // userId:any,
    // email:any,
    // login:any,
    // isAuth:any
}


export default authReducer