import React from "react";
import ProfileItem from "./ProfileItem/ProfileItem";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type PropsType = {
    profile: any
    status: string
    getUpdateUserStatus: (status: string) => void
    isAuth: any
}


const Profile = React.memo((props: PropsType) => {
    console.log('profile')
    return (
        <div>
            <ProfileItem profile={props.profile} status={props.status} getUpdateUserStatus={props.getUpdateUserStatus}/>
            <MyPostsContainer/>
        </div>
    );
});

export default Profile;
