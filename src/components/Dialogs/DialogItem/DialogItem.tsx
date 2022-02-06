import React from 'react';
//import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import s from './../../Profile/MyPosts/Post/Post.module.css';


type DialogType = {
    id: number,
    name: string
}

export function DialogItem(props: DialogType) {
    return (
        <div className={s.dialog}>
            <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_fpPmbK-bebEeX036y7frmW06amtCkG1ew&usqp=CAU'/>
            <NavLink to={`/dialogs/${props.id}`}
                     className={({isActive}) => `${isActive ? s.active : ''}`}> {props.name} </NavLink>
        </div>
        </div>
    );
}

