import {ResultCodesEnum, userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {PhotosType} from "./profile-reducer";
import {AppRootStateType} from "./redux-store";
import {Dispatch} from "react";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [2, 3]
}


function usersReducer(state: UsersTypeAll = initialState, action: UserActionTypes): UsersTypeAll {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}//взять старый стей и пользовтелей которые там были и перезатеретт весь массив
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }


}


///////////*********ACTIONS**********//////////

export const follow = (userId: number | null): FollowActionCreatorType => ({type: FOLLOW, userId})

export const unFollow = (userId: number | null): UnFollowActionCreatorType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UsersType>): setUsetACType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): setCurrentPageACType => ({
    type: SET_CURRENT_PAGE, currentPage: currentPage
})
export const setTotalUsersCount = (totalCount: number): setTotalCountACType => ({
    type: SET_TOTAL_COUNT, totalCount: totalCount
})
export const toggleIsFetching = (isFetching: boolean): isFetchingACType => ({
    type: IS_FETCHING, isFetching: isFetching
})
export const isFollowingInProgress = (isFetching: boolean, userId: number): isFollowingInProgressType => ({
    type: IS_FOLLOWING_PROGRESS, isFetching: isFetching, userId: userId
})

///////////*********THUNK**********//////////

export const getUsersTC = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch<UserActionTypes>, getState: () => AppRootStateType) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        let data = await userAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.data.items))
        dispatch(setTotalUsersCount(data.data.totalCount))

    }
}

export const unFollowThunkCreator = (userID: number) => {
    return async (dispatch: Dispatch<UserActionTypes>) => {
        dispatch(isFollowingInProgress(true, userID))
        let data = await userAPI.unFollowUsers(userID)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(unFollow(userID))
        }
        dispatch(isFollowingInProgress(false, userID))

    }
}
export const followThunkCreator = (userID: number) => {
    return async (dispatch: Dispatch<UserActionTypes>) => {
        dispatch(isFollowingInProgress(true, userID))
        let data = await userAPI.followUsers(userID)
        if (data.resultCode === 0) {
            dispatch(follow(userID))
        }
        dispatch(isFollowingInProgress(false, userID))

    }
}

///////////*********TYPES**********//////////

type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
    location: LocationType
}
export type UsersTypeAll = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}


export type UserActionTypes =
    FollowActionCreatorType
    | UnFollowActionCreatorType
    | setUsetACType
    | setCurrentPageACType
    | setTotalCountACType
    | isFetchingACType
    | isFollowingInProgressType


type isFollowingInProgressType = {
    type: typeof IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
type isFetchingACType = {
    type: typeof IS_FETCHING
    isFetching: boolean
}

type setTotalCountACType = {
    type: typeof SET_TOTAL_COUNT
    totalCount: number
}

type setCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: any
}
type FollowActionCreatorType = {
    type: typeof FOLLOW
    userId: any
}
type UnFollowActionCreatorType = {
    type: typeof UNFOLLOW
    userId: any

}
type setUsetACType = {
    type: typeof SET_USERS
    users: Array<UsersType>

}
const UNFOLLOW = "UNFOLLOW"
const FOLLOW = "FOLLOW_UP"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const IS_FETCHING = "IS_FETCHING"
const IS_FOLLOWING_PROGRESS = "IS_FOLLOWING_PROGRESS"


export default usersReducer