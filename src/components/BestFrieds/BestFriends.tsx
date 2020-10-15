import React from "react";
import classes from "./bestFriends.module.css";
import store from "./../../redux/state";


const BestFriends = () => {
    const bestFriends = store._state.dialogsPage.dialogs.map((friend: any) => {
        return <div  className={classes.container} key={friend.id}>
            <br></br>
            <img className={classes.photoFriend}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4bkPT14o4_n_lnU-3DNyZol1LE0vParolHN-kXQTD8exgO4-8&usqp=CAU"></img>
            {friend.name}

        </div>;
    })
    return (
        <div className={classes.myBestFriends}>

            <span className={classes.profileFriend}>           {bestFriends}</span>
        </div>

    );
};

export default BestFriends;
