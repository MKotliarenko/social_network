import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {RootStateTypeForConnect} from "../Redux/redux-store";

type mapStateToPropsType = {
    isAuth:boolean
}

const mapStateToProps = (state:RootStateTypeForConnect):mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component:ComponentType<T>)  {
    let RedirectComponent = (props:mapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if(!isAuth){return <Navigate to="/login" />;}
        return <Component {...restProps as T}/>
    }

    const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}


