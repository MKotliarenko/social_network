import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "./../../App"
import {SideBar} from "../SideBar/sideBar";

type ProfilePropsType = {
    postData:Array<PostDataType>
}

export function Profile(props:ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.postData} />
        </div>
    );
}