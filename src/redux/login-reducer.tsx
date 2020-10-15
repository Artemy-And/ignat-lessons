import React from "react";



let initialState: initialStateType = {
    login: "",
    password: 1
}

export function loginReducer(state: initialStateType = initialState, action: setLoginACType): initialStateType {
    switch (action.type) {

        case SET_LOGIN: {
            return {
                ...state, login: action.login,
                password: action.password
            }
        }


        default:
            return state
    }


}
///////////*********ACTIONS**********//////////
export const setLoginAC = (login: string, password: string): setLoginACType => ({
    type: SET_LOGIN, login, password
})

///////////*********TYPES**********//////////
const SET_LOGIN = "SET_LOGIN"

type initialStateType = {
    login: string
    password: any
}
type setLoginACType = {
    type: typeof SET_LOGIN
    login: string
    password: any
}

// export const setLoginToAuth=(login:string,password:string)=>(dispatch:any)=>{
//     setLoginAPI.authLogin(login,password)
//         .then((response:any)=>{
//             // if (response.data.resultCode === 0){
//                 dispatch(setLoginAC(response.login,response.password))
//             // }
//
//         })
// }
