import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://s1.1zoom.ru/b5050/755/Scenery_Lake_Switzerland_486095_1600x1200.jpg"></img>
      </div>
      <div>ava + desription</div>
      <div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
