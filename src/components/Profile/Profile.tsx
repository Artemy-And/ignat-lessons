import React from "react";
import ProfileItem from "./ProfileItem/ProfileItem";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type PropsType = {
    profile: any
    status: string
    getUpdateUserStatus: (status: string) => void
    isAuth: any
    isOwner: any
    getSavePhotoTC: any
    getSaveInfoTC: any
}


const Profile = React.memo((props: PropsType) => {
    console.log('profile')
    return (
        <div>
            <ProfileItem getSavePhotoTC={props.getSavePhotoTC}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         getUpdateUserStatus={props.getUpdateUserStatus}
                         getSaveInfoTC={props.getSaveInfoTC}
            />

            <MyPostsContainer/>
        </div>
    );
});

export default Profile;
