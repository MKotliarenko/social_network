import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType} from "./../../../App"

type MyPosts={
    postData:Array<PostDataType>
    addPostToState:(newPost:string)=>void
}


export function MyPosts(props:MyPosts) {
    let postsElements = props.postData.map(p => <Post id={p.id}text={p.text} likes={p.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = ()=>{
        let text = newPostElement.current?.value
        props.addPostToState(text?text:"")
    }
    return (
        <div className={s.PostsBlock}>
            <h3>my-posts</h3>
            <div className={s.item}>
                new-post
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button  onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.Posts} >
                {postsElements}
            </div>

        </div>
    );
}