


import { rerenderEntireTree } from "./render";
import state from "./redux/state";


rerenderEntireTree(state);

//ReactDOM.render(<App state = {state} addPost={addPost}/>, document.getElementById("root"));
