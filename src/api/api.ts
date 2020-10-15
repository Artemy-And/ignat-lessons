import axios from "axios";
import {PhotosType, ProfileType} from "../redux/profile-reducer";
import {UsersType} from "../redux/user-reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "53444f05-2fd9-4762-9034-1b37fffb3067"
//         "API-KEY": "53444f05-2fd9-4762-9034-1b37fffb30677897987"
    }
})


export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
      let promise = instance.get<ResponseGetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
        return promise
            // .then((response: any) => {
            //     return response.data
            // });
    },
    unFollowUsers(userId: number) {
        return instance.delete<ResponseUnfollowFollowType>(`follow/${userId}`)//когда хотим отписаться нужен delete
            .then((response: any) => {
                return response.data
            });
    },
    followUsers(userId: number) {
        return instance.post<ResponseUnfollowFollowType>(`follow/${userId}`)//когда хотим отписаться нужен delete
            .then((response: any) => {
                return response.data
            });
    },
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}/`)
    }

}

export const profileAPI = {
    getProfile(userId: any) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: any) {
        return instance.put('profile/status/', {status: status})
    },
    saveProfile(profile: ProfileType) {
        return instance.put('profile', profile)
    },

    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile)

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}

export const authAPI = {
    me() {
        return instance.get<ResponseMeType>('auth/me').then(res => res.data)
    },

    authUsers() {
        return instance.get("auth/me")
            .then((response: any) => {
                return response.data
            });
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: any = null) {
        return instance.post<ResponseLoginType>(`auth/login`, {email, password, rememberMe, captcha});
    },
    logOut() {
        return instance.delete(`auth/login`);
    }

}

// export type AuthMeType = {
//     email: string
//     login: string
//     id: number
// }
//
// type ResponseType<T> = {
//     data: T
//     fieldsError?: string[]
//     messages: string[]
//     resultCode: ResultCodesEnum
// }
type ResponseGetUsersType = {
    items: Array<UsersType>
    totalCount:any
    error:string
}
type ResponseUnfollowFollowType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data:{}
}

type ResponseLoginType = {
    fieldsError?: string[]
    messages: Array<string>
    resultCode: ResultCodesEnum
    data: {
        userId: number
    }
}
type ResponseMeType = {
    data: {
        email: string
        login: string
        id: number
    }
    fieldsError?: string[]
    resultCode: ResultCodesEnum
    messages: Array<string>
}


// type ResponseGetUsersType = {
//     data: T
//     fieldsError: string[]
//     messages: string[]
//     resultCode: number
// }

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}


// export const setLoginAPI = {
//     authLogin(email:string,password:string){
//        const promise = instance.post<any>(`auth/login/`,{email},{password})
//       return promise
//     },
// }













