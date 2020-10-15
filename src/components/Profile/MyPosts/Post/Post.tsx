import React from "react";
import classes from "./Post.module.css";

type propsType = {
    message: string;
    likesCount: number;
    onDeletePost: any
    id: string

};

const Post = (props: propsType) => {

    return (
        <div className={classes.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4bkPT14o4_n_lnU-3DNyZol1LE0vParolHN-kXQTD8exgO4-8&usqp=CAU"></img>
            {props.message}

            <div>
                <span>{props.likesCount} likes</span>
            </div>
            <button className={classes.myButton} onClick={() => {
                props.onDeletePost(props.id)
            }}>del
            </button>
        </div>
    );
};

export default Post;
