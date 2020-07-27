import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { stateType, stateTypeFirst } from "./redux/state";





type PropsType = {
    state: stateType
    store: stateTypeFirst
    dispatch:  (action:any) => void

}

const App = (props:PropsType) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Route
            exact
            path="/dialogs"
            render={() => {
              return (
                  <Dialogs state={props.store._state.dialogsPage} dispatch={props.dispatch} />
              );
            }}
          />
          <Route
            path="/profile"
            render={() => { return <Profile
                profilePage={props.store._state.profilePage}
                dispatch={props.dispatch}
                />;
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

