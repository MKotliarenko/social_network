import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/NavBar/Nav";
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {SideBar} from './components/SideBar/sideBar';
import {DialogsDataType, MassagesDataType, PostDataType} from './Redux/state';

export type AppTypeProps = {
    dialogsData: Array<DialogsDataType>
    massagesData: Array<MassagesDataType>
    profilePage: Array<PostDataType>
    newPostsText:string
    addPostToState: (newPost: string) => void
    updateChangeInput: (newText: string) => void

}


function App(props: AppTypeProps) {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>

                        <Route path="/profile/*" element={<Profile postData={props.profilePage}
                                                                   addPostToState={props.addPostToState}
                                                                   newPostsText={props.newPostsText}
                                                                   updateChangeInput={props.updateChangeInput}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogsData={props.dialogsData}
                                                                   massagesData={props.massagesData}/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
