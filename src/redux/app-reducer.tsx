import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";
const INITIALIZED_SUCCESED = "INITIALIZED_SUCCESED"


export type initialStateType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}


function appReducer(state: initialStateType = initialState, action: setInitialisedType): initialStateType {
    switch (action.type) {
        case INITIALIZED_SUCCESED:
            return {
                ...state,
                initialized: true,

            }

        default:
            return state
    }


}

export const setInitialisedSuccess = (): setInitialisedType => ({type: INITIALIZED_SUCCESED})

export const initializeAppTC = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData())
   Promise.all([promise])
       .then(()=>{
        dispatch(setInitialisedSuccess());
    });
}

type setInitialisedType = {
    type: typeof INITIALIZED_SUCCESED
}


export default appReducer