import {stateType, dialogsTypeState} from "./state"

// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"

let initialState = {

    dialogs: [
        {id: 1, name: "Artemy"},
        {id: 2, name: "Alevtina"},
        {id: 3, name: "Akseniya"},
        {id: 4, name: "Afonasii"},
        {id: 5, name: "Belanton"},
        {id: 6, name: "Stephan"},
        {id: 7, name: "Stephan"},
        {id: 8, name: "Stephan"},
        {id: 9, name: "Stephan"},
    ],
    messages: [
        {id: 1, message: "Halllooo?"},
        // { id: 2, message: "Hey how are you?" },
        // { id: 3, message: "Hey how are you?" },

    ],
    newMessageText: ""

}


function dialogsReducer(state: dialogsTypeState = initialState, action: DialogsActionType): dialogsTypeState {
    let stateCopy;



    switch (action.type) {
        // case UPDATE_NEW_MESSAGE_TEXT: {
        //     stateCopy = {
        //         ...state,
        //         newMessageText: action.newMessageText1
        //     };
        //     return stateCopy
        // }
        case ADD_MESSAGE: {

            let newMessage = action.newMessageText
            let stateCopy = {
                ...state,
                newMessageText: "",
                messages: [...state.messages, {id: 77, message: newMessage}]

            };
            // let newMessage = {
            //     id: 77,
            //     message: state.newMessageText
            // }
            return stateCopy
        }
        default:
            return state
    }

}

export type DialogsActionType = AddMessageCreatorType
    // UpdateNEwMessageTextCreator

type AddMessageCreatorType = {
    type: typeof ADD_MESSAGE
    newMessageText:string
}
// type UpdateNEwMessageTextCreator = {
//     type: typeof UPDATE_NEW_MESSAGE_TEXT;
//     newMessageText1: string
// }

export const addMessageCreator = (newMessageText:string): AddMessageCreatorType => ({type: ADD_MESSAGE,newMessageText})

// export const updateNEwMessageTextCreator = (text: string): UpdateNEwMessageTextCreator => ({
//     type: UPDATE_NEW_MESSAGE_TEXT, newMessageText1: text,
// })

export default dialogsReducer