import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from './Redux/redux-store';
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";


    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );


