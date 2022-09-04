import React from 'react';
import axios, {AxiosResponse} from "axios";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setUserAvaAC, setUserDataAC, userDateType} from "../../Redux/auth-reducer";
import {RootStateTypeForConnect} from "../../Redux/redux-store";

export type HeaderContainerPropsType = {
    setUserData: (userData: userDateType) => void
    setUserAva: (userAva: string) => void
    isAuth: boolean
    login: string
    photos:string
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then((response: AxiosResponse) => {
                if (!response.data.resultCode) {
                    this.props.setUserData(response.data.data)
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
                        .then((response: AxiosResponse) => {
                            this.props.setUserAva(response.data.photos.small);
                        })
                }
            })
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
export const HeadContainerConnect = connect(mapStateToProps, {setUserData: setUserDataAC, setUserAva:setUserAvaAC})(HeaderContainer)
