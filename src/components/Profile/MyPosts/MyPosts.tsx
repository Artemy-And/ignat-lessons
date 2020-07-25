import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message = 'Hi, how are you?' info = 'LIKE' addInfo="DISLIKE"/>
        <Post message = 'It is my first post' info = 'LIKE' addInfo="DISLIKE"/>


      </div>
    </div>
  );
};

export default MyPosts;
