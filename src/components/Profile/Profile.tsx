import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {SideBar} from "../SideBar/sideBar";
import {ActionsTypes, PostDataType} from '../../Redux/state';


export type ProfilePropsType = {
    postData: Array<PostDataType>
    newPostsText: string
    // addPostToState: (newPost: string) => void
    // updateChangeInput: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}


export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     dispatch={props.dispatch}
                     newPostsText={props.newPostsText}
            />
        </div>
    );
}