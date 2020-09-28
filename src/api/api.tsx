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

    getProfile(userId: number) {
        return instance.get(`profile/${userId}/`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}/`)
    },
    updateStatus(status:any){
        return instance.put('profile/status/',{status:status})
    }

}

export const authAPI = {
     me(){
    return instance.get('auth/me')
    },
    authUsers() {
        return instance.get("auth/me")
            .then((response: any) => {
                return response.data
            });
    },
    login(email:string,password:string,rememberMe:boolean = false){
    return instance.post(`auth/login`,{email,password,rememberMe});
    },
    logOut(){
    return instance.delete(`auth/login`);
    }

}

// export const setLoginAPI = {
//     authLogin(email:string,password:string){
//        const promise = instance.post<any>(`auth/login/`,{email},{password})
//       return promise
//     },
// }













