import React, {ChangeEvent} from 'react';
import {ActionsTypes, PostDataType} from '../../../Redux/state';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

const addPostAC =(newPostsText:string)=>{
    return {
        type: "ADD-POST-TO-STATE", newPost: newPostsText
    }
}

type MyPosts = {
    postData: Array<PostDataType>
    newPostsText: string
    dispatch: (action: ActionsTypes) => void
}


export function MyPosts(props: MyPosts) {
    let postsElements = props.postData.map(p => <Post id={p.id} text={p.text} likes={p.likes}/>)

    let addPost = () => {
        props.dispatch( addPostAC(props.newPostsText) )
    }
    const changeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "UPDATE-CHANGE-INPUT", newText: e.currentTarget.value})
    }

    return (
        <div className={s.PostsBlock}>
            <h3>my-posts</h3>
            <div className={s.item}>
                new-post
                <div>
                    <textarea onChange={changeInput} value={props.newPostsText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.Posts}>
                {postsElements}
            </div>

        </div>
    );
}