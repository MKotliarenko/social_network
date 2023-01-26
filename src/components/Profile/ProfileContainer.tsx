import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {connect} from "react-redux";
import {RootStateTypeForConnect} from "../../Redux/redux-store";
import {
    changeStatusThunkCreator, getProfileThunkCreator, getStatusThunkCreator,
    UserProfileType
} from '../../Redux/profile-reducer';
import {Navigate, useParams} from 'react-router-dom';
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import s from "./ProfileContainer.module.css";


type ProfileContainerAJAXPropsType = {
    profile: UserProfileType
    userId: string
    getProfile: (userId: string) => void
    myId: number | null
    status: string
    getStatus: (userId: string) => void
    changeStatus: (status: string) => void
}

export class ProfileContainerAJAX extends React.Component<ProfileContainerAJAXPropsType> {

    componentDidMount() {
        let userId: string = this.props.userId
        if (!userId && this.props.myId != null)
            userId = this.props.myId.toString()
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerAJAXPropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.props.changeStatus(this.props.status)
        }
    }

    //    74!!!
    render() {
        return (

                <div className={s.PContainer}>
                    <Profile profile={this.props.profile} status={this.props.status}
                             changeStatus={this.props.changeStatus}/>
                </div>

        )
    }
}

//--------

type WithUrlUserIdComponentType = {
    profile: UserProfileType
    getProfile: (userId: string) => void
    myId: number | null
    status: string
    getStatus: (userId: string) => void
    changeStatus: (status: string) => void

}

const WithUrlUserIdComponent = (props: WithUrlUserIdComponentType) => {
    let params = useParams<'*'>()
    let userId = params["*"]
    return <ProfileContainerAJAX  {...props} userId={userId ?? ''}/>
}

//--------

const mapStateToProps = (state: RootStateTypeForConnect) => {
    return {
        profile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth,
        myId: state.auth.id,
        status: state.profilePage.status
    }
}


export const ProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, {
        getProfile: getProfileThunkCreator,
        getStatus: getStatusThunkCreator,
        changeStatus: changeStatusThunkCreator
    }),
    WithAuthRedirect
)(WithUrlUserIdComponent)

