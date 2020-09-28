import React from "react";
import ReactDOM from 'react-dom'
import {SocialTSApp} from "./App";


it('renders without crashing', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<SocialTSApp/>,div)
    ReactDOM.unmountComponentAtNode(div);
});


