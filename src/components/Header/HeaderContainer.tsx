import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthThunkCreator} from "../../Redux/auth-reducer";
import {RootStateTypeForConnect} from "../../Redux/redux-store";

export type HeaderContainerPropsType = {
    isAuth: boolean
    login: string
    photos:string
    getAuth:()=>void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} photos={this.props.photos} />
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
    getAuth:getAuthThunkCreator
})(HeaderContainer)
