import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, addMassageAC, changeInputDialogAC, dialogsPageType} from '../../Redux/state';

type DialogsPropsType = {
    dialogsPage: dialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem key={d.id} id={d.id} name={d.name}
                                                                             img={d.img}/>)
    let massagesElements = props.dialogsPage.massagesData.map(m => <Message key={m.id} text={m.text}/>)
    let addMessage = () => {
        props.dispatch(addMassageAC(props.dialogsPage.newMassageText))
    }
    let changeInputMassage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeInputDialogAC(e.currentTarget.value))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {massagesElements}
            </div>
            <div>
                <textarea onChange={changeInputMassage}/>
            </div>
            <div>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    );
}