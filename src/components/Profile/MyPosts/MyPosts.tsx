import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let messagesData = [
        {id : 1, message : "Hi, how are you?",countLikes :10},
        {id : 2, message : "Hi, how are you?",countLikes :133},
        {id : 3, message : "Hi, how are you?",countLikes :4432}
    ]
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
      <div className={classes.posts}>
        <Post message ={messagesData[0].message} likesCount = {messagesData[0].countLikes}/>
        <Post message ={messagesData[1].message} likesCount = {messagesData[1].countLikes}/>
        <Post message ={messagesData[2].message} likesCount = {messagesData[2].countLikes}/>



      </div>
    </div>
  );
};

export default MyPosts;
