import React, {ChangeEvent} from 'react';
import {PostDataType} from '../../../Redux/profile-reducer';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";


type MyPostsType = {
    addPost: () => void
    changeInput: (newText: string) => void
    posts: Array<PostDataType>
    newPostsText: string
}

export function MyPosts(props: MyPostsType) {
    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} text={p.text} likes={p.likes}/>)

    let onAddPost = () => {
        props.addPost()
    }
    const onChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeInput(e.currentTarget.value)
    }

    return (
        <div className={s.PostsBlock}>
            <h3>my-posts</h3>
            <div className={s.item}>
                new-post
                <div>
                    <textarea onChange={onChangeInput} value={props.newPostsText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.Posts}>
                {postsElements}
            </div>

        </div>
    );
}