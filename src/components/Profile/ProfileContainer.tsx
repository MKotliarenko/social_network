import React from 'react';
import {Profile} from './Profile';
import {connect} from "react-redux";
import {RootStateTypeForConnect} from "../../Redux/redux-store";
import {getProfileThunkCreator, setUserProfileAC, UserProfileType} from '../../Redux/profile-reducer';
import {Navigate, useParams} from 'react-router-dom';


type ProfileContainerAJAXPropsType = {
    profile:UserProfileType
    userId:string
    getProfile:(userId:string)=>void
    isAuth:boolean
    myId:number|null
}

export class ProfileContainerAJAX extends React.Component<ProfileContainerAJAXPropsType> {

    componentDidMount() {
        let userId:string=this.props.userId
        if(!userId&& this.props.isAuth&&this.props.myId!=null) userId=this.props.myId.toString()
        this.props.getProfile(userId)
    }


render() {
    if(!this.props.isAuth){return <Navigate to="/login" />;}
    return <div>
            <Profile profile={this.props.profile}/>
        </div>
    }
}
//--------

type WithUrlUserIdComponentType = {
    profile:UserProfileType
    getProfile:(userId:string)=>void
    isAuth:boolean
    myId:number|null
}

const WithUrlUserIdComponent =(props:WithUrlUserIdComponentType)=>{
    let params = useParams<'*'>()
    let userId = params["*"]
    return <ProfileContainerAJAX  {...props} userId={userId??''}/>
}

//--------

const mapStateToProps=(state:RootStateTypeForConnect)=>{
    return {
        profile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth,
        myId:state.auth.id
    }
}

export const ProfileContainer = connect (mapStateToProps,
    {getProfile:getProfileThunkCreator})(WithUrlUserIdComponent)


