import React from "react";
import {postsType} from "./../components/Profile/MyPosts/MyPosts";
import {
    dialogsDataType,
    dialogsMessagesDataType,
} from "./../components/Dialogs/Dialogs";


const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_POST = "ADD-POST"
const UPDATE_NEW_MESSAGE_TEXT ="UPDATE-NEW-MESSAGE-TEXT"
const ADD_MESSAGE ="ADD-MESSAGE"
export type stateTypeFirst = {
    _state: stateType
    getState: () => stateType
    rerenderEntireTree: (state: any) => void
    subsCribe: (observer: any) => void
    dispatch: (action: any) => void///КАКОЙ ТИп
}
export type postsTypeState = {
    posts: Array<postsType>
    newPostText: string
}
export type dialogsTypeState = {
    dialogs: Array<dialogsDataType>
    messages: Array<dialogsMessagesDataType>
    newMessageText: string

}
export type stateType = {
    profilePage: postsTypeState
    dialogsPage: dialogsTypeState

}


let store: stateTypeFirst = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", countLikes: 10},
                {id: 2, message: "Hi, how are you?", countLikes: 133},
                {id: 3, message: "Hi, how are you?", countLikes: 4432},
            ],
            newPostText: 'it-kamasutra'
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
    dispatch(action) {

        if (action.type === ADD_POST) {
            let newPost: postsType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                countLikes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this.rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this.rerenderEntireTree(this._state);
        } else if (action.type === "ADD-MESSAGE") {
            let newMessage = {
                id: 77,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ""
            store.rerenderEntireTree(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            debugger;
            this._state.dialogsPage.newMessageText = action.newMessageText1
            this.rerenderEntireTree(this._state);
        }

    }
}
export const addPostActionCreator = ()=>({type:ADD_POST})

export const updateNEwPostTextActionCreator = (text:string)=>({
    type: UPDATE_NEW_POST_TEXT, newText: text,})

export const addMessageCreator = ()=>({type:ADD_MESSAGE})

export const updateNEwMessageTextCreator = (text:string)=>({
  type: UPDATE_NEW_MESSAGE_TEXT, newMessageText1: text,})



export default store;
