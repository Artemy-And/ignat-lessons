  import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store, { stateTypeFirst, stateType } from "./redux/state"
import { BrowserRouter } from "react-router-dom";

 let rerenderEntireTree = (state:stateType)=>{

     ReactDOM.render(
        <BrowserRouter>
         <App state = {state}
              dispatch={store.dispatch.bind(store)}
              store={store}
         /></BrowserRouter>, document.getElementById("root"));

 }

 rerenderEntireTree(store.getState());
 store.subsCribe(rerenderEntireTree);



//
// ReactDOM.render(
//     <BrowserRouter>
//         <App state = {state}
//              dispatch={store.dispatch.bind(store)}
//              store={store}
//              updateTextPost={store.updateTextPost.bind(store)}
//              addMessage={store.addMessage.bind(store)}
//              updateMessagePost={store.updateMessagePost.bind(store)}/></BrowserRouter>, document.getElementById("root"));
//
// }
//
// rerenderEntireTree(store.getState());
// store.subsCribe(rerenderEntireTree);


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "../App";
// import state, { addPost, updateTextPost } from "../redux/state"
//
// export let rerenderEntireTree = (state:any)=>{
//     ReactDOM.render(<App state = {state} addPost={addPost} updateTextPost={updateTextPost}/>, document.getElementById("root"));
//
// }
//
//
// //ReactDOM.render(<App state = {state} addPost={addPost}/>, document.getElementById("root"));
