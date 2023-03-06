import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {deleteLogoutThunkCreator, getAuthThunkCreator} from "../../Redux/auth-reducer";
import {RootStateTypeForConnect} from "../../Redux/redux-store";

export type HeaderContainerPropsType = {
    isAuth: boolean
    login: string | null
    photos: string
    getAuth: () => void
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    // componentDidMount() {
    //     this.props.getAuth()
    // }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}
                       photos={this.props.photos}/>
    }
}

const mapStateToProps = (state: RootStateTypeForConnect) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photos: state.auth.photos
    }


}
export const HeadContainerConnect = connect(mapStateToProps, {
    getAuth: getAuthThunkCreator, logout: deleteLogoutThunkCreator
})(HeaderContainer)
