import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import {stateTypeFirst, stateType} from "./redux/state"
import store from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


// let rerenderEntireTree = (state: any) => {

    ReactDOM.render(
        <BrowserRouter>

            <Provider store={store}>
                <App/>
            </Provider>


        </BrowserRouter>, document.getElementById("root"));

// }
//
// rerenderEntireTree(store.getState());//вызываю её
// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// });
