import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/iconmen.png";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../redux/user-reducer";


type usersTypeComponent = {
    users: UsersType
    followingInProgress: Array<number>
    unFollowThunkCreator: (userID: number) => void
    followThunkCreator: (userID: number) => void
}


export const User = (props: usersTypeComponent) => {
let u = props.users

    return (
        <div className={styles.block}>
            <span>
                <div className={styles.container}>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div className={styles.additionalContainer}>
                    {u.followed ?
                        <button className={styles.myButton} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unFollowThunkCreator(u.id)
                        }}>Unfollow</button>
                        :
                        <button className={styles.myButton} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.followThunkCreator(u.id)
                        }}>Follow</button>
                    }

                </div>
            </span>
            <div className={styles.info}>
                  <span>
                <span>
                    <div><b>Nickname</b>: {u.name}</div>
                    <br></br>
                    <div><b>Location</b>:{u.status}</div>
                </span>
                <span>
                         <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>

                </span>
            </span>
            </div>


        </div>
    )


}