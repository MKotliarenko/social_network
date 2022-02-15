import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import { DialogsType } from '../../Redux/state';



export function Dialogs(props: DialogsType) {

    let dialogsElements = props.dialogsData.map(d => <DialogItem id={d.id} name={d.name} img={d.img}/>)
    let massagesElements = props.massagesData.map(m => <Message text={m.text}/>)
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        let message = newMessageElement.current?.value
        alert(message)
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
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    );
}