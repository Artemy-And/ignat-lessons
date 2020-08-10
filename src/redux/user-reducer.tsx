const UNFOLLOW = "UNFOLLOW"
const FOLLOW = "FOLLOW_UP"
const SET_USERS = "SET_USERS"


type LocationType = {
    city: string
    country: string
}

export type usersType = {
    id: number
    photoUrl:any
    followed: boolean
    FullName: string
    status: string
    location: LocationType
}
export type usersTypeAll = {
    users: Array<usersType>
}

let initialState = {
    users: [
        {
            id: 1,
            photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw5yWfC9hIIKyp6Al3g5T-VOi-iq7zR3DNRwhAmGprnImKaHMw-857V7IDuQMn7aK2Gb3YenlD2XOXcPEs6Esrm0uZ-XaJ&usqp=CAU",
            followed: true,
            FullName: "Artemii",
            status: "i am looking for new info",
            location: {
                city: "Moscow",
                country: "Russia"
            }
        },
        {
            id: 2,
            photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw5yWfC9hIIKyp6Al3g5T-VOi-iq7zR3DNRwhAmGprnImKaHMw-857V7IDuQMn7aK2Gb3YenlD2XOXcPEs6Esrm0uZ-XaJ&usqp=CAU",
            followed: false,
            FullName: "George",
            status: "i am studing english right now",
            location: {
                city: "Vancouver",
                country: "Canada"
            }
        },
        {
            id: 3,
            photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw5yWfC9hIIKyp6Al3g5T-VOi-iq7zR3DNRwhAmGprnImKaHMw-857V7IDuQMn7aK2Gb3YenlD2XOXcPEs6Esrm0uZ-XaJ&usqp=CAU",
            followed: true,
            FullName: "Oksana",
            status: "i am doing massage",
            location: {
                city: "Archangelsk",
                country: "Russia"
            }
        }
    ],
    newPostText: 'it-kamasutra'
}


function usersReducer(state: usersTypeAll = initialState, action: UserActionTypes): usersTypeAll {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users:[...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                // users:[...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS:
            return {...state, users:[...state.users, ...action.users] }//взять старый стей и пользовтелей которые там были и перезатеретт весь массив

        default:
            return state
    }


}

export const followActionCreator = (userId: any): FollowActionCreatorType => ({type: FOLLOW, userId})

export const unFollowActionCreator = (userId: any): UnFollowActionCreatorType => ({type: UNFOLLOW, userId})
export const setUsetAC = (users: any): setUsetACType => ({type: SET_USERS, users})


export type UserActionTypes = FollowActionCreatorType | UnFollowActionCreatorType|setUsetACType


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
    users: any

}


export default usersReducer