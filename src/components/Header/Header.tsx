import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainer";

type HeaderPropsType = HeaderContainerPropsType

export function Header(props: HeaderPropsType) {
    debugger
    return (<header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png'/>
        <div className={s.loginBlock}>
            {props.isAuth ?
                props.login
                :
                <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>);
}