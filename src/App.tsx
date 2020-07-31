import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {stateType, stateTypeFirst} from "./redux/state";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { DialogsActionType } from "./redux/dialogs-reducer";
import { ProfileActionTypes } from "./redux/profile-reducer";
import { Store } from "redux";


type PropsType = {
    // state: stateType

    // store: Store
    // value:any

    // dispatch: (action: any) => void
    // dispatch: (action: DialogsActionType|ProfileActionTypes) => void

}

const App = () => {
    // let stateRedux = props.store.getState()//это уже redux

    return (

        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Route
                        exact
                        path="/dialogs"
                        render={() => <DialogsContainer
                            // store={props.store}

                        />
                        }
                    />

                    <Route
                        path="/profile"
                        render={() => {
                            return <Profile

                                // store={props.store}
                            />;
                        }}
                    />
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

