import React from "react";
import MyPosts, { propsType } from "./MyPosts/MyPosts";
import ProfileItem from "./ProfileItem/ProfileItem";
import { postsTypeState } from "../../redux/state";

type PropsType = {
    profilePage: postsTypeState
    dispatch:  (action:string) => void


}
const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileItem />
      <MyPosts
          posts={props.profilePage.posts}
          newPostText={props.profilePage.newPostText}
          dispatch={props.dispatch}/>
    </div>
  );
};

export default Profile;
