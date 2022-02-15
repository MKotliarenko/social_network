import React from 'react';
import s from './Post.module.css';

type PostTextType = {
    id: number
    text: string,
    likes: number
}

export function Post(props: PostTextType) {
    return (
        <div>
            <div className={s.item}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_fpPmbK-bebEeX036y7frmW06amtCkG1ew&usqp=CAU'/>
                {props.text}
                <div>
                    <span>like {props.likes}</span>
                </div>
            </div>
        </div>
    );
}