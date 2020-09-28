import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/iconmen.png";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/Paginator/Paginator";


type usersType = {

    users: any
    // totalUsersCount: number
    // onPageChanged: (p: number) => void
    // unFollow: (userId: any) => void
    // follow: (userId: any) => void
    // name: string
    // status: any
    // // isFollowingInProgress: any
    followingInProgress: Array<number>
    unFollowThunkCreator: (userID: number) => void
    followThunkCreator: (userID: number) => void


}


export const User = (props: usersType) => {
let u = props.users

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unFollowThunkCreator(u.id)
                        }}>Unfollow</button>
                        :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.followThunkCreator(u.id)
                        }}>Follow</button>
                    }

                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                         <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>

                </span>
            </span>

        </div>
    )


}