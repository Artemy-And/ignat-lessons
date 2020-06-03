import React from "react";
// import {BrowserRouter,Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { postsType } from "./components/Profile/MyPosts/MyPosts";
import {
  dialogsDataType,
  dialogsMessagesDataType,
} from "./components/Dialogs/Dialogs";
import state from "./redux/state";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Route
            exact
            path="/dialogs"
            component={() => {
              return (
                <Dialogs dialogs={state.dialogs} messages={state.messages} />
              );
            }}
          />
          <Route
            path="/profile"
            component={() => {
              return <Profile posts={state.posts} />;
            }}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

// let posts: Array<postsType> = [
//   { id: 1, message: "Hi, how are you?", countLikes: 10 },
//   { id: 2, message: "Hi, how are you?", countLikes: 133 },
//   { id: 3, message: "Hi, how are you?", countLikes: 4432 },
// ];

// let dialogs: Array<dialogsDataType> = [
//   { id: 1, name: "Artemy" },
//   { id: 2, name: "Alevtina" },
//   { id: 3, name: "Akseniya" },
//   { id: 4, name: "Afonasii" },
//   { id: 5, name: "Belanton" },
//   { id: 6, name: "Stephan" },
//   { id: 7, name: "Stephan" },
//   { id: 8, name: "Stephan" },
//   { id: 9, name: "Stephan" },
// ];
// let messages: Array<dialogsMessagesDataType> = [
//   { id: 1, message: "Halllooo?" },
//   { id: 2, message: "Hey how are you?" },
//   { id: 3, message: "Hey how are you?" },
//   { id: 4, message: "Hey Buddy" },
//   { id: 5, message: "Hey how are you?" },
//   { id: 6, message: "Hey how are you?" },
//   { id: 7, message: "Hey how are you?" },
//   { id: 8, message: "Hey how are you?" },
//   { id: 9, message: "Hey how are you?" },
//   { id: 10, message: "Hey Buddy" },
//   { id: 11, message: "Hey how are you?" },
//   { id: 12, message: "Hey how are you?" },
// ];
