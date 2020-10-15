import {profileAPI, userAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {v1} from "uuid";


let initialState: postsTypeState = {
    posts: [
        {id: v1(), message: "Hi, how are you?", countLikes: 10},
        {id: v1(), message: "Hi, any news?", countLikes: 133},
        {id: v1(), message: "How long have you been here?", countLikes: 4432},
    ],
    profile: null,
    status: "",
    newPostText: ""
}


function profileReducer(state: postsTypeState = initialState, action: ProfileActionTypes): postsTypeState {
    switch (action.type) {
        case ADD_POST: {

            let newPost: postsType = {
                id: v1(),
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
            debugger
            // return state.posts.filter(tl => tl.id != action.postId)

            return {...state,
                posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case SET_SAVE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photo} as ProfileType}


        default:
            return state
    }


}

///////////*********ACTIONS**********//////////

export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({type: ADD_POST, newPostText})


export const setUserProfile = (profile: ProfileType | null): setUserProfileType => ({
    type: SET_USER_PROFILE, profile: profile

})

export const setStatusProfile = (status: string): setStatusProfileType => ({
    type: SET_STATUS_PROFILE, status
})
export const setStatusUpdate = (status: string): setStatusUpdateType => ({
    type: SET_STATUS_UPDATE, status
})
export const deletePostAC = (postId: number|string): deletePostType => ({
    type: DELETE_POST, postId
})
export const setSavePhotoAC = (photo: PhotosType): setSavePhotoType => ({
    type: SET_SAVE_PHOTO, photo
})


/////////*********THUNKS*********/////////


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
    } catch (error) {
        debugger
        alert(error)
    }
}

export const getSavePhotoTC = (file: any) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setSavePhotoAC(response.data.data.photos))
    }
}
export const getSaveInfoTC = (profile: any) => async (dispatch: any, getState: any) => {
    const userIds: any = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userIds))
    } else {
        dispatch(stopSubmit('profileDataForm', {_error: response.data.messages[0]}));//ёто нужно будет потом распарсить
        return Promise.reject(response.data.messages[0])
    }
}

///////////*********TYPES**********//////////
const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS_PROFILE = "SET_STATUS_PROFILE"
const SET_STATUS_UPDATE = "SET_STATUS_UPDATE"
const DELETE_POST = "DELETE_POST"
const SET_SAVE_PHOTO = "SET_SAVE_PHOTO"

export type ProfileActionTypes =
    AddPostActionCreatorType
    | setUserProfileType
    | setStatusProfileType
    | setStatusUpdateType
    | deletePostType
    | setSavePhotoType


type setSavePhotoType = {
    type: typeof SET_SAVE_PHOTO
    photo: PhotosType

}
type setStatusUpdateType = {
    type: typeof SET_STATUS_UPDATE
    status: string
}
type deletePostType = {
    type: typeof DELETE_POST
    postId: number|string
}
type setStatusProfileType = {
    type: typeof SET_STATUS_PROFILE
    status: string
}
type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType | null
}
type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}
export type postsTypeState = {
    posts: Array<postsType>
    profile: ProfileType | null
    status: string
    newPostText: any
}
export type postsType = {
    id: number|string;
    message: string;
    countLikes: number;
};
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}


export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}


export default profileReducer