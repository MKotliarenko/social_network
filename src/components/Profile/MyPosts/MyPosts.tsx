import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType} from "./../../../App"

type MyPosts={
    postData:Array<PostDataType>
}


export function MyPosts(props:MyPosts) {
    let postsElements = props.postData.map(p => <Post text={p.text} likes={p.likes}/>);
    return (
        <div className={s.PostsBlock}>
            <h3>my-posts</h3>
            <div className={s.item}>
                new-post
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.Posts} >
                {postsElements}
            </div>

        </div>
    );
}