import {postsType} from "../components/Profile/MyPosts/MyPosts"
import {postsTypeState} from "./state";
import {profileAPI, userAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {rejects} from "assert";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS_PROFILE = "SET_STATUS_PROFILE"
const SET_STATUS_UPDATE = "SET_STATUS_UPDATE"
const DELETE_POST = "DELETE_POST"
const SET_SAVE_PHOTO = "SET_SAVE_PHOTO"


let initialState: postsTypeState = {
    posts: [
        {id: 1, message: "Hi, how are you?", countLikes: 10},
        {id: 2, message: "Hi, how are you?", countLikes: 133},
        {id: 3, message: "Hi, how are you?", countLikes: 4432},
    ],
    profile: null,
    status: ""
}


function profileReducer(state: postsTypeState = initialState, action: ProfileActionTypes): postsTypeState {
    switch (action.type) {
        case ADD_POST: {

            let newPost: postsType = {
                id: 5,
                message: action.newPostText,
                countLikes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS_PROFILE: {
            return {...state, status: action.status}
        }
        case SET_STATUS_UPDATE: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {


            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case SET_SAVE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photo}}


        default:
            return state
    }


}

export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({type: ADD_POST, newPostText})


export const setUserProfile = (profile: any): setUserProfileType => ({
    type: SET_USER_PROFILE, profile: profile

})

export const setStatusProfile = (status: string): setStatusProfileType => ({
    type: SET_STATUS_PROFILE, status
})
export const setStatusUpdate = (status: string): setStatusUpdateType => ({
    type: SET_STATUS_UPDATE, status
})
export const deletePostAC = (postId: number): deletePostType => ({
    type: DELETE_POST, postId
})
export const setSavePhotoAC = (photo: number): setSavePhotoType => ({
    type: SET_SAVE_PHOTO, photo
})

export const getUserProfile = (userId: any) => async (dispatch: Dispatch) => {
    let response = await userAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))

}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusProfile(response.data))

}
export const getUpdateUserStatus = (status: string) => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusUpdate(status))
        }
    }
    catch (error){
        alert(error)
    }

}
export const getSavePhotoTC = (file: any) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setSavePhotoAC(response.data.data.photos))
    }
}
export const getSaveInfoTC = (profile: any) => async (dispatch: any, getState:any) => {
    const userIds:any = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userIds))
    } else{
        dispatch(stopSubmit('profileDataForm', {_error: response.data.messages[0]}));//ёто нужно будет потом распарсить
        return Promise.reject(response.data.messages[0])
    }
}

export type ProfileActionTypes =
    AddPostActionCreatorType
    | setUserProfileType
    | setStatusProfileType
    | setStatusUpdateType
    | deletePostType
    | setSavePhotoType


type setSavePhotoType = {
    type: typeof SET_SAVE_PHOTO
    photo: any
}
type setStatusUpdateType = {
    type: typeof SET_STATUS_UPDATE
    status: string
}
type deletePostType = {
    type: typeof DELETE_POST
    postId: number
}
type setStatusProfileType = {
    type: typeof SET_STATUS_PROFILE
    status: string
}
type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: any
}
type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}


export default profileReducer