import React from "react";
import classes from "./Post.module.css";

type propsType = {
    message: string
   likesCount: number
}

const Post = (props:propsType) => {
  return (
    <div className={classes.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4bkPT14o4_n_lnU-3DNyZol1LE0vParolHN-kXQTD8exgO4-8&usqp=CAU"></img>
        {props.message}

      <div>
        <span>{props.likesCount}</span>
      </div>

    </div>


  );
};

export default Post;
