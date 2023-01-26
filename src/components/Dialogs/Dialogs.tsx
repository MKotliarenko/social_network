import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MassagesDataType} from '../../Redux/dialogs-reducer';
import { Navigate } from 'react-router-dom';

type DialogsPropsType = {
    changeInputMassage: (newText: string) => void
    addMessage: (newMassageText:string) => void
    dialogsData: Array<DialogsDataType>
    massagesData: Array<MassagesDataType>
    newMassageText: string
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogsData.map(d => <DialogItem key={d.id} id={d.id} name={d.name}
                                                                 img={d.img}/>)
    let massagesElements = props.massagesData.map(m => <Message key={m.id} text={m.text}/>)
    let onAddMessage = () => {
        props.addMessage(props.newMassageText)
    }
    let onChangeInputMassage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeInputMassage(e.currentTarget.value)

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {massagesElements}
                <div>
                    <textarea placeholder="Enter your massage" onChange={onChangeInputMassage}
                              value={props.newMassageText}/>
                </div>
                <div>
                    <button onClick={onAddMessage}>Send</button>
                </div>
            </div>

        </div>
    );
}