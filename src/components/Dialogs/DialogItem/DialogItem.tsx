import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";


type DialogType = {
    id: number,
    name: string
    img:string
}

export function DialogItem(props: DialogType) {
    return (
        <div className={s.dialog}>
            <div className={s.item}>
                <img
                    src= {props.img}/>
                <NavLink to={`/dialogs/${props.id}`}
                         className={({isActive}) => `${isActive ? s.active : ''}`}> {props.name} </NavLink>
            </div>
        </div>
    );
}

