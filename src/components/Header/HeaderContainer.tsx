import React from 'react';
import axios, {AxiosResponse} from "axios";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setUserDataAC, userDateType} from "../../Redux/auth-reducer";
import {RootStateTypeForConnect} from "../../Redux/redux-store";

export type HeaderContainerPropsType = {
    setUserData: (userData: userDateType) => void
    isAuth: boolean
    login: string
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then((response: AxiosResponse) => {
                if (!response.data.resultCode) {
                    this.props.setUserData(response.data);
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: RootStateTypeForConnect) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }


}
export const HeadContainerConnect = connect(mapStateToProps, {setUserData: setUserDataAC})(HeaderContainer)
