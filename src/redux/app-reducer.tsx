import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";


let initialState = {
    initialized: false,
    error:null
}

function appReducer(state: InitialStateType = initialState, action: ActionsTypes): InitialStateType {
    switch (action.type) {
        case INITIALIZED_SUCCESED:
            return {
                ...state,
                initialized: true,
            }
        case SET_APP_ERROR:
            return {...state,error:action.error}
        default:
            return state
    }
}

///////////*********ACTIONS**********//////////
export const setInitialisedSuccess = (): SetInitialisedType => ({type: INITIALIZED_SUCCESED})
export const setAppErrorAC = (error: string | null): SetAppErrorACType => ({type: SET_APP_ERROR, error})


///////////*********THUNK**********//////////
export const initializeAppTC = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialisedSuccess());
        });
}

///////////*********TYPES**********//////////

export type ResponseType<D = {}> = {//если D не передавать то он будет путым объектом
    resultCode: number
    messages: Array<string>
    data: D
}






type ActionsTypes = SetAppErrorACType | SetInitialisedType

const INITIALIZED_SUCCESED = "INITIALIZED_SUCCESED"
const SET_APP_ERROR = "SET_APP_ERROR"


export type InitialStateType = {
    initialized: boolean
    error:string | null
}

type SetAppErrorACType = {
    type: typeof SET_APP_ERROR
    error: string | null
}
type SetInitialisedType = {
    type: typeof INITIALIZED_SUCCESED
}


export default appReducer