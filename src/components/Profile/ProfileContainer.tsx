import React from 'react';
import {Profile} from './Profile';
import * as axios from "axios";
import {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {RootStateTypeForConnect} from "../../Redux/redux-store";
import {setUserProfileAC, UserProfileType} from '../../Redux/profile-reducer';
import {useParams} from 'react-router-dom';


type ProfileContainerAJAXPropsType = {
    setUserProfile:(userProfile:UserProfileType)=>void
    profile:UserProfileType
    userId:string
}

export class ProfileContainerAJAX extends React.Component<ProfileContainerAJAXPropsType> {

    componentDidMount() {
        //@ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
            .then((response: AxiosResponse) => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return <div>
            <Profile profile={this.props.profile}/>
        </div>
    }
}
//--------

type WithUrlUserIdComponentType = {
    setUserProfile:(userProfile:UserProfileType)=>void
    profile:UserProfileType
}

const WithUrlUserIdComponent =(props:WithUrlUserIdComponentType)=>{
    let {userId} = useParams()
    return <ProfileContainerAJAX  {...props} userId={userId??''}/>
}

//--------

const mapStateToProps=(state:RootStateTypeForConnect)=>{
    return {
        profile: state.profilePage.userProfile
    }
}

export const ProfileContainer = connect (mapStateToProps,
    {setUserProfile:setUserProfileAC})(WithUrlUserIdComponent)


