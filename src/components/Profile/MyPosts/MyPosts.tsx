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
    addPost:(postMessage:any) => void

};

const MyPosts = (props: propsType) => {
  let newMessagesData = props.posts.map((item) => {
    return <Post message={item.message} likesCount={item.countLikes} />;
  });

  //создайм ссылку на какой то элемент из JSX
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {

        let text = newPostElement.current!.value;
        props.addPost(text)
        newPostElement.current!.value = ""
    }



  return (
    <div className={classes.postAll}>
      My posts
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>

        </div>
      </div>
      <div className={classes.posts}>{newMessagesData}</div>
    </div>
  );
};

export default MyPosts;
