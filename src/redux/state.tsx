import React from "react";

import { postsType } from "./../components/Profile/MyPosts/MyPosts";
import {
  dialogsDataType,
  dialogsMessagesDataType,
} from "./../components/Dialogs/Dialogs";
import { rerenderEntireTree } from "../render";



// export type stateType = {
//   posts: Array<postsType>;
//   dialogs: Array<dialogsDataType>;
//   messages: Array<dialogsMessagesDataType>;
// };

type postsTypeState ={
  posts:Array<postsType>
}
type dialogsTypeState={
  dialogs:Array<dialogsDataType>
  messages:Array<dialogsMessagesDataType>
}

export type stateType ={
  profilePage: postsTypeState
  dialogsPage:dialogsTypeState
}



let state: stateType = {

  profilePage: {
    posts: [
      {id: 1, message: "Hi, how are you?", countLikes: 10},
      {id: 2, message: "Hi, how are you?", countLikes: 133},
      {id: 3, message: "Hi, how are you?", countLikes: 4432},
    ]
  },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Artemy" },
        { id: 2, name: "Alevtina" },
        { id: 3, name: "Akseniya" },
        { id: 4, name: "Afonasii" },
        { id: 5, name: "Belanton" },
        { id: 6, name: "Stephan" },
        { id: 7, name: "Stephan" },
        { id: 8, name: "Stephan" },
        { id: 9, name: "Stephan" },
      ],
      messages: [
        { id: 1, message: "Halllooo?" },
        // { id: 2, message: "Hey how are you?" },
        // { id: 3, message: "Hey how are you?" },

      ]
    }
  }

  export let addPost = (postMessage:any)=>{

  let newPost = {
    id: 5,
    message: postMessage,
    countLikes: 0
  }
state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
  }


export default state;
