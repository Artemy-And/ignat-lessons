import React from "react";
import {usersType, usersTypeAll} from "../../redux/user-reducer";
import styles from "./users.module.css"

type usersTypeForUsersPage = {
    users: Array<usersType>
    follow: (userId: any) => void
    unFollow: (userId: any) => void
    setUsers: (users: any) => void

}

export function Users(props: usersTypeForUsersPage) {
    if(props.users.length === 0) {props.setUsers([
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
    )}
    return <div>
        {props.users.map(u =>
            <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={() => {props.unFollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                    }

                </div>
            </span>
                <span>
                <span>
                    <div>{u.FullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                         <div>{u.location.country}</div>
                    <div>{u.location.city}</div>

                </span>
            </span>

            </div>
        )}
    </div>
}