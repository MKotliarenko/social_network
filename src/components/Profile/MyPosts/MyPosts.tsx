import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";


export function MyPosts() {
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
                <Post text={"Hello, how are you?"} likes={15}/>
                <Post text={"hi, it's my first post"} likes={20}/>
                <Post text={"Ok"} likes={5}/>
            </div>

        </div>
    );
}