import React from "react";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";
import {UsersType} from "../../redux/user-reducer";



type usersTypeForComponent = {
    pageSize: number
    currentPage: number
    users: Array<UsersType>
    totalUsersCount: number
    onPageChanged: (p: number) => void
    unFollow: (userId: any) => void
    follow: (userId: any) => void
    name: string
    status: any
    followingInProgress: Array<number>
    unFollowThunkCreator:(userID:number)=>void
    followThunkCreator:(userID:number)=>void
}



function solve(s: any) {
    let upper = s.split('').filter((x: any) => x === x.toUpperCase()).length
    let lower = s.split('').filter((x: any) => x === x.toLowerCase()).length
    console.log(upper)
    console.log(lower)
    return lower > upper || lower == upper ? s.toLowerCase() : s.toUpperCase()

}



export const Users = (props: usersTypeForComponent) => {


    return (
        <div>


            {
                props.users.map((u: any) => <User users={u}
                                                  followingInProgress={props.followingInProgress}
                                                  followThunkCreator={props.followThunkCreator}
                                                  unFollowThunkCreator={props.unFollowThunkCreator}
                                                  key={u.id}/>


                )}
            <Paginator pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalItemsCount={props.totalUsersCount}
            />
        </div>)

}