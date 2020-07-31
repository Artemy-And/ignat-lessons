import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileItem from "./ProfileItem/ProfileItem";
import {postsTypeState} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Store } from "redux";

type PropsType = {
    store: Store
}


const Profile = () => {
    return (
        <div>
            <ProfileItem/>

            <MyPostsContainer
                // store={props.store}
            />
        </div>
    );
};

export default Profile;
