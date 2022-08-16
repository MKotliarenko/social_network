import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {SideBar} from "../SideBar/sideBar";
import {ActionsTypes, profilePageType} from '../../Redux/state';


export type ProfilePropsType = {
    profilePage: profilePageType
    dispatch: (action: ActionsTypes) => void
}


export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.posts}
                     dispatch={props.dispatch}
                     newPostsText={props.profilePage.newPostsText}
            />
        </div>
    );
}