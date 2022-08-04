import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from './Redux/state';
import ReactDOM from "react-dom";
import App from "./App";

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree()
store.subscribe(renderEntireTree)

reportWebVitals();
