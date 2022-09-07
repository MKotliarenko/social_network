import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
    photos: string
}
export function Header(props: HeaderPropsType) {

    return (<header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png'/>
        <div className={s.loginBlock}>
            {props.isAuth ?
                props.login :
                <NavLink to={'/login'}>Login</NavLink>
            }
            <img className={s.ava} src={props.photos}/>
        </div>
    </header>);
}