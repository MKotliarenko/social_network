import React, {ChangeEvent, useEffect, useState} from 'react';

type profileStatusPropsType = {
    status: string
    changeStatus:(status:string)=>void

}

export const ProfileStatus = (props: profileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=>{setStatus(props.status)},[props.status])

    const activatedEdit = () =>{
        setEditMode(true)
    }
    const deactivatedEdit = () => {
        setEditMode(false)
        props.changeStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }



    return (
        <div>
            {!editMode ?
                <div>
                    <span onDoubleClick={activatedEdit}>{props.status|| "No Status"}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivatedEdit} value={status}/>
                </div>
            }


        </div>
    );
};

