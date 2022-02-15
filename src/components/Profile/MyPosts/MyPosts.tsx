import React, { ChangeEvent } from 'react';
import {PostDataType} from '../../../Redux/state';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

type MyPosts = {
    postData: Array<PostDataType>
    newPostsText:string
    addPostToState: (newPost: string) => void
    updateChangeInput:(newText:string) => void
}


export function MyPosts(props: MyPosts) {
    let postsElements = props.postData.map(p => <Post id={p.id} text={p.text} likes={p.likes}/>)

    let addPost = () => {
        props.addPostToState(props.newPostsText)
    }
    const changeInput=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateChangeInput(e.currentTarget.value)
    }

    return (
        <div className={s.PostsBlock}>
            <h3>my-posts</h3>
            <div className={s.item}>
                new-post
                <div>
                    <textarea  onChange={changeInput} value={props.newPostsText} />
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