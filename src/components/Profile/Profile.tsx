import React from "react";
import MyPosts, { propsType } from "./MyPosts/MyPosts";
import ProfileItem from "./ProfileItem/ProfileItem";

const Profile = (props: propsType) => {
  return (
    <div>
      <ProfileItem />
      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;
