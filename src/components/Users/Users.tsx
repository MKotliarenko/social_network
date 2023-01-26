import React from 'react';
import {UserType} from "../../Redux/users-reducer";
import s from "./Users.module.css";
import UsersPhoto from "../../assets/images/usersava.png";
import {NavLink} from "react-router-dom";
import {Paginator} from "../Common/Paginator/Paginator";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageSelected: (pageNumber: number) => void
    followingInProgress: boolean
    followingIdUser: Array<number>
}

export const Users = (props: UsersPropsType) => {

    const followHandler = (userId: number) => {
        props.follow(userId)
    }
    const unFollowHandler = (userId: number) => {
        props.unfollow(userId)
    }

    return <div className={s.users}>
        <Paginator  pageSize={props.pageSize} totalItemsCount={props.totalUsersCount}
        portionSize={15}  currentPage={props.currentPage} onPageSelected={props.onPageSelected}/>
        {
            props.users.map(u =>
                <div key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : UsersPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed
                                ?
                                <button disabled={props.followingIdUser.some(id => id === u.id)} onClick={() => {
                                    unFollowHandler(u.id)
                                }}>Unfollow</button>
                                :
                                <button disabled={props.followingIdUser.some(id => id === u.id)} onClick={() => {
                                    followHandler(u.id)
                                }}>Follow</button>
                        }
                    </div>
                    <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        {/*<div >{u.location.country}</div>*/}
                        {/*<div >{u.location.city}</div>*/}
                        </span>
                </div>)
        }
    </div>
}
