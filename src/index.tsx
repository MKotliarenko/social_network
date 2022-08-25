import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from './Redux/redux-store';
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';

const renderEntireTree = () => {
    ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
        document.getElementById('root')
    );
}
renderEntireTree()
store.subscribe(() => {
    renderEntireTree()
})

reportWebVitals();

