import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType} from  "./../../App"
import {MassagesDataType} from  "./../../App"

type DialogsType = {
    dialogsData:Array<DialogsDataType>
    massagesData:Array<MassagesDataType>
}

export function Dialogs(props: DialogsType) {

    let dialogsElements = props.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/> );
    let massagesElements = props.massagesData.map(m => <Message text={m.text}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {massagesElements}
            </div>
        </div>
    );
}