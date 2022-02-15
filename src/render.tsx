import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPostToState, StateType, updateChangeInput} from "./Redux/state";



export const renderEntireTree = (state:StateType) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App dialogsData={state.dialogsPage.dialogsData}
                 massagesData={state.dialogsPage.massagesData}
                 profilePage={state.profilePage.posts}
                 newPostsText={state.profilePage.newPostsText}
                 addPostToState={addPostToState}
                 updateChangeInput={updateChangeInput}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}