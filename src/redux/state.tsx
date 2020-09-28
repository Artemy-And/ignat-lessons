import React from "react";
import {postsType} from "./../components/Profile/MyPosts/MyPosts";
import {
    dialogsDataType,
    dialogsMessagesDataType,
} from "./../components/Dialogs/Dialogs";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
// const ADD_POST = "ADD-POST"
// const UPDATE_NEW_MESSAGE_TEXT ="UPDATE-NEW-MESSAGE-TEXT"
// const ADD_MESSAGE ="ADD-MESSAGE"
export type stateTypeFirst = {
    _state: stateType
    getState: () => stateType
    rerenderEntireTree: (state: any) => void
    subsCribe: (observer: any) => void
    dispatch: (action: any) => void///КАКОЙ ТИп
}
export type postsTypeState = {
    posts: Array<postsType>

    profile:any
    status:string
}

export type dialogsTypeState = {
    dialogs: Array<dialogsDataType>
    messages: Array<dialogsMessagesDataType>
    newMessageText:string
}
export type stateType = {
    profilePage: postsTypeState
    dialogsPage: dialogsTypeState
    auth:any
}

// let store: stateTypeFirst = {
let store: any = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", countLikes: 10},
                {id: 2, message: "Hi, how are you?", countLikes: 133},
                {id: 3, message: "Hi, how are you?", countLikes: 4432},
            ],
            newPostText: 'it-kamasutra',
            profile:null
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state;
    },
    subsCribe(observer: any) {
        this.rerenderEntireTree = observer
    },
    rerenderEntireTree(state: any) {
        console.log('state changed')
    },
    dispatch(action:any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this.rerenderEntireTree(this._state)
    }
}


export default store;
