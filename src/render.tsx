import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state, { addPost } from "./redux/state"

export let rerenderEntireTree = (state:any)=>{
    ReactDOM.render(<App state = {state} addPost={addPost}/>, document.getElementById("root"));

}


//ReactDOM.render(<App state = {state} addPost={addPost}/>, document.getElementById("root"));
