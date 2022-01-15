import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsType = {}
type DialogType = {
    id:number,
    name: string
}
type MessageType = {
    text:string
}

function DialogItem(props: DialogType) {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`} className={({isActive}) => `${isActive ? s.active : ''}`}> {props.name} </NavLink>
        </div>
    );
}
function Message(props:MessageType) {
    return(
        <div className={s.message}>
            {props.text}
        </div>
    );
}

export function Dialogs(props: DialogsType) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={1} name={"Barbara"}/>
                <DialogItem id={2} name={"Marina"}/>
                <DialogItem id={3} name={"SJR"}/>
                <DialogItem id={4} name={"Anton"}/>
                <DialogItem id={5} name={"Jalba"}/>
                <DialogItem id={6} name={"Mama"}/>
            </div>

            <div className={s.messages}>
                <Message text={"hi"}/>
                <Message text={"How are you?"}/>
                <Message text={"how is your JavaScript?"}/>
            </div>
        </div>
    );
}