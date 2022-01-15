import React from 'react';
import s from './ProfileInfo.module.css';


export function ProfileInfo() {
    return (
        <div >
            <div>
                <img
                    src='https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Mountain-Landscape-Simple-Nature-Background-Image.jpg'/>
            </div>
            <div className={s.DescriptionBlock}>
                ava
            </div>
        </div>
    );
}