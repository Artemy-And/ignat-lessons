import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import statee from "./redux/state"


ReactDOM.render(<App state = {statee} />, document.getElementById("root"));
