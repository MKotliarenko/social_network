import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../Redux/profile-reducer";
import s from "./Profile.module.css"
import usersAva from "../../assets/images/usersava.png";
import UsersPhoto from "../../assets/images/usersava.png";
import Preloader from "../Common/Preloader/Preloader";

type ProfilePropsType = {
    profile: UserProfileType
    status: string
    changeStatus: (status: string) => void
}

export function Profile(props: ProfilePropsType) {
    if (!props.profile) {
        return <div><Preloader/></div>
    }
    return (
        <div className={s.ProfileGrid}>
            <div className={s.profile}>
                <div className={s.cover}>
                    <div className={s.withImg}>
                    </div>
                    <div className={s.name}>
                        ffff
                    </div>
                    <div className={s.avaCaver}>
                        <div className={s.ava}>
                            <img className={s.imgAva} src={props.profile.photos.large!= null ? props.profile.photos.large : UsersPhoto} />
                        </div>
                        <h3 className={s.userNameAva}>{props.profile.fullName}</h3>
                    </div>
                </div>
            </div>
            <div className={s.info}>
                <div className={s.profileInfoTitle}><h4 className={s.title}>Profile info</h4></div>
                <ProfileInfo profile={props.profile} status={props.status} changeStatus={props.changeStatus}/>
            </div>
            <div className={s.posts}>
                <MyPostsContainer/>
            </div>
        </div>
    )
}