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

export type DialogsDataType = {
    id: number
    name: string
    img: string
}
export type MassagesDataType = {
    id: number
    text: string
}
export type PostDataType = {
    id: number
    text: string
    likes: number
}
type AppTypeProps = {
    dialogsData: Array<DialogsDataType>
    massagesData: Array<MassagesDataType>
    postData: Array<PostDataType>
    addPostToState: (newPost:string) => void

}

function App(props: AppTypeProps) {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>

                        <Route path="/profile/*" element={<Profile postData={props.postData}
                                                                   addPostToState={props.addPostToState}/>}/>
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
