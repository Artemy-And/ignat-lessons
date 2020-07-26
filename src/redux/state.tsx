import React from "react";

import { postsType } from "./../components/Profile/MyPosts/MyPosts";
import {
  dialogsDataType,
  dialogsMessagesDataType,
} from "./../components/Dialogs/Dialogs";



export type stateType = {
  posts: Array<postsType>;
  dialogs: Array<dialogsDataType>;
  messages: Array<dialogsMessagesDataType>;
};

let state: stateType = {
  posts: [
    { id: 1, message: "Hi, how are you?", countLikes: 10 },
    { id: 2, message: "Hi, how are you?", countLikes: 133 },
    { id: 3, message: "Hi, how are you?", countLikes: 4432 },
  ],
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
    { id: 2, message: "Hey how are you?" },
    { id: 3, message: "Hey how are you?" },
    { id: 4, message: "Hey Buddy" },
    { id: 5, message: "Hey how are you?" },
    { id: 6, message: "Hey how are you?" },
    { id: 7, message: "Hey how are you?" },
    { id: 8, message: "Hey how are you?" },
    { id: 9, message: "Hey how are you?" },
    { id: 10, message: "Hey Buddy" },
    { id: 11, message: "Hey how are you?" },
    { id: 12, message: "Hey how are you?" },
  ],
};

export default state;
