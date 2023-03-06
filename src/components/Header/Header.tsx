import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    photos: string
    logout: () => void
}

export function Header(props: HeaderPropsType) {

    return (
        <header className={s.header}>
            <img className={s.headerLogo} src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png'/>
            <div className={s.loginBlock}>
                {props.isAuth &&
                    <img className={s.ava} src={props.photos}/>
                }
                <div className={s.headerLogin}>
                    {props.isAuth ?
                        <div>
                            <div>{props.login}</div>
                            <div className={s.loginLogout} onClick={props.logout}>Logout</div>
                        </div> :
                        <span className={s.loginLogout}>
                            <NavLink style={{textDecoration: "none", color: "gold"}} to={'/login'}>Login</NavLink>
                        </span>

                    }
                </div>

            </div>
        </header>);
}