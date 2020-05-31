import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileItem from "./ProfileItem/ProfileItem";




const Profile = () => {
  return (
    <div>
      <ProfileItem />
      <MyPosts />

    </div>
  );
};

export default Profile;
