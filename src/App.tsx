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
import {store, StoreType} from './Redux/state';

export type AppTypeProps = {
    store: StoreType
}


function App(props: AppTypeProps) {
    const state = props.store.getState()
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>

                        <Route path="/profile/*" element={<Profile postData={state.profilePage.posts}
                                                                   dispatch={store.dispatch.bind(props.store)}
                                                                   newPostsText={state.profilePage.newPostsText}
                                                                   />}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogsData={state.dialogsPage.dialogsData}
                                                                   massagesData={state.dialogsPage.massagesData}/>}/>
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
