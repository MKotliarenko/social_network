import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {SideBar} from "../SideBar/sideBar";
import {PostDataType} from '../../Redux/state';


export type ProfilePropsType = {
    postData: Array<PostDataType>
    newPostsText:string
    addPostToState: (newPost: string) => void
    updateChangeInput:(newText:string) => void
}


export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     addPostToState={props.addPostToState}
                     newPostsText={props.newPostsText}
                     updateChangeInput={props.updateChangeInput}/>
        </div>
    );
}