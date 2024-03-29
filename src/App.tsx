import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/NavBar/Nav";
import {Route, Routes} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {SideBar} from './components/SideBar/sideBar';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeadContainerConnect} from './components/Header/HeaderContainer';
import {LoginContainer} from "./components/Login/Login";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootStateType} from "./Redux/redux-store";
import {initializeAppTC} from "./Redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";


function App() {

    const appUseSelector: TypedUseSelectorHook<RootStateType> = useSelector
    const dispatch = useDispatch<AppDispatch>();

    const initialized = appUseSelector((state) => state.app.initialized)
    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!initialized) {
        return <Preloader/>
    } else {
        return (
            <div className="app-wrapper">
                <HeadContainerConnect/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/users/*" element={<UsersContainer/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                        <Route path="/login/*" element={<LoginContainer/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;
