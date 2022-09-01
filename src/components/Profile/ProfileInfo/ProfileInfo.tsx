import React from "react";
import s from "./ProfileInfo.module.css";
import {UserProfileType} from "../../../Redux/profile-reducer";
import UsersPhoto from "../../../assets/images/usersava.png";
import Preloader from "../../Common/Preloader/Preloader";
import YesImage from "../../../assets/images/yes.png"
import NoImage from "../../../assets/images/no.png"
import SocialNetwork from "../../../assets/images/social-network.jpeg"


type ProfileInfoPropsType = {
    profile: UserProfileType
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <div><Preloader/></div>
    }

    return (
        <div>
            <div>
                <img width={'100%'} height={250}
                     src={SocialNetwork}/>
            </div>
            <div className={s.DescriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : UsersPhoto}/>
                <div>Name : {props.profile.fullName}</div>
                <div>AboutMe : {props.profile.aboutMe}</div>
                <div>looking for a Job : {props.profile.lookingForAJob? <img className={s.yesNo} src={YesImage}/> :<img className={s.yesNo} src={NoImage}/>}</div>
                <div>Job description : {props.profile.lookingForAJobDescription}</div>
                <span>Contacts :</span>
                <ul>
                    <li>vk : {props.profile.contacts.vk}</li>
                    <li>youtube : {props.profile.contacts.youtube}</li>
                    <li>facebook : {props.profile.contacts.facebook}</li>
                    <li>github : {props.profile.contacts.github}</li>
                    <li>twitter : {props.profile.contacts.twitter}</li>
                    <li>instagram : {props.profile.contacts.instagram}</li>
                    <li>mainLink : {props.profile.contacts.mainLink}</li>
                    <li>website : {props.profile.contacts.website}</li>
                </ul>
            </div>
        </div>
    );
}