import React from "react";
import s from "./ProfileInfo.module.css";
import {UserProfileType} from "../../../Redux/profile-reducer";
import UsersPhoto from "../../../assets/images/usersava.png";
import Preloader from "../../Common/Preloader/Preloader";
import YesImage from "../../../assets/images/yes.png"
import NoImage from "../../../assets/images/no.png"
import SocialNetwork from "../../../assets/images/social-network.jpeg"
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    changeStatus: (status: string) => void

}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <div><Preloader/></div>
    }

    return (
        <div>
            <div className={s.DescriptionBlock}>
                <ProfileStatus status={props.status} changeStatus={props.changeStatus}/>
                <ul style={{marginBottom: 0, listStyle: "none", padding: 0}}>
                    <li>
                        <span className={s.DescriptionTitle}>AboutMe</span>
                        <span className={s.DescriptionText}>{props.profile.aboutMe}</span>
                    </li>
                    <li>
                        <span className={s.DescriptionTitle}>Job</span>
                        <span className={s.DescriptionText}>
                            looking for a Job : {props.profile.lookingForAJob ?
                            <img className={s.yesNo} src={YesImage}/>
                            : <img className={s.yesNo} src={NoImage}/>}
                            <div>Job description : {props.profile.lookingForAJobDescription}</div>
                        </span>
                    </li>
                    <li>
                        <span className={s.DescriptionTitle}>Contacts</span>
                        <span className={s.DescriptionText}>
                                <div>vk : {props.profile.contacts.vk}</div>
                                <div>youtube : {props.profile.contacts.youtube}</div>
                                <div>facebook : {props.profile.contacts.facebook}</div>
                                <div>github : {props.profile.contacts.github}</div>
                                <div>twitter : {props.profile.contacts.twitter}</div>
                                <div>instagram : {props.profile.contacts.instagram}</div>
                                <div>mainLink : {props.profile.contacts.mainLink}</div>
                                <div>website : {props.profile.contacts.website}</div>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}