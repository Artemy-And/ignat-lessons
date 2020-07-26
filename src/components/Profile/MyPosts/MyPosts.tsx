import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

export type postsType = {
  id: number;
  message: string;
  countLikes: number;
};

export type propsType = {
  posts: Array<postsType>;
};

const MyPosts = (props: propsType) => {
  let newMessagesData = props.posts.map((item) => {
    return <Post message={item.message} likesCount={item.countLikes} />;
  });

  return (
    <div className={classes.postAll}>
      My posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{newMessagesData}</div>
    </div>
  );
};

export default MyPosts;
