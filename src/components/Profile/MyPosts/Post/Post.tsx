import React from 'react';
import s from './Post.module.css';
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type PostTextType = {
    id: number
    text: string,
    likes: number
}

export function Post(props: PostTextType) {
    return (
        <div>
            <div className={s.cover}>
                <div className={s.item}>
                    <div style={{marginBottom: 20}}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_fpPmbK-bebEeX036y7frmW06amtCkG1ew&usqp=CAU'/>
                    </div>
                    <p>{props.text}</p>
                </div>
                <div className={s.likeArea}>
                    <FontAwesomeIcon icon={faHeart}/>
                    {props.likes}
                </div>
            </div>
        </div>
    );
}