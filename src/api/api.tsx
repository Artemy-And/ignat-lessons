import React from "react";
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "53444f05-2fd9-4762-9034-1b37fffb3067"
    }
})


export const userAPI = {
    getUsers(currentPage:number, pageSize:number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response: any) => {
                return response.data
            });
    },


    unFollowUsers(userId: number) {
        return instance.delete(`follow/${userId}`)//когда хотим отписаться нужен delete
            .then((response: any) => {
                return response.data
            });
    },
    followUsers(userId: number) {
        return instance.post(`follow/${userId}`)//когда хотим отписаться нужен delete
            .then((response: any) => {
                return response.data
            });
    },
    getProfile(userId: number) {
        return instance.get(`profile/${userId}/`)
    }

}

export const profileAPI = {

    getProfile(userId: any) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status:any){
        return instance.put('profile/status/',{status:status})
    },
       saveProfile(profile:any){
        return instance.put('profile',profile)
    },

    savePhoto(photoFile:any){
    const formData = new FormData();
    formData.append('image',photoFile )

    return instance.put('profile/photo',formData,{
    headers:{
            'Content-Type':'multipart/form-data'
            }
        })
    }

}
export const securityAPI = {
  getCaptchaUrl(){
    return instance.get('security/get-captcha-url')
    }
    }

export const authAPI = {
     me(){
    return instance.get<ResponseType<AuthMeType>>('auth/me').then(res => res.data)
    },

    authUsers() {
        return instance.get("auth/me")
            .then((response: any) => {
                return response.data
            });
    },
    login(email:string,password:string,rememberMe:boolean = false, captcha:any=null){
    return instance.post(`auth/login`,{email,password,rememberMe,captcha});
    },
    logOut(){
    return instance.delete(`auth/login`);
    }

}

export type AuthMeType = {
    email: string
    login: string
    id: number
}

type ResponseType<T> = {
    data: T
    fieldsError: string[]
    messages: string[]
    resultCode: number
}
// export const setLoginAPI = {
//     authLogin(email:string,password:string){
//        const promise = instance.post<any>(`auth/login/`,{email},{password})
//       return promise
//     },
// }













