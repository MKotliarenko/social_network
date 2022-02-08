import {PostDataType} from "../App";

export let state = {
    profilePage: {
        posts: [
            {id: 1, text: "Hello, how are you?", likes: 15},
            {id: 2, text: "hi, it's my first post", likes: 20},
            {id: 3, text: "Ok", likes: 5},
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Barbara", img: "https://cdn-icons-png.flaticon.com/512/194/194938.png"},
            {id: 2, name: "Marina", img: "https://cdn-icons-png.flaticon.com/512/194/194932.png"},
            {id: 3, name: "SJR", img: "https://cdn-icons-png.flaticon.com/512/194/194937.png"},
            {id: 4, name: "Anton", img: "https://cdn-icons-png.flaticon.com/512/194/194935.png"},
            {id: 5, name: "Papa", img: "https://cdn-icons-png.flaticon.com/512/194/194933.png"},
            {id: 6, name: "Mama", img: "https://cdn-icons-png.flaticon.com/512/194/194936.png"},
        ],
        massagesData: [
            {id: 1, text: "hi"},
            {id: 2, text: "How are you?"},
            {id: 3, text: "how is your JavaScript?"},
        ]
    }
}
export const addPostToState = (newPost:string)=>{
    const newObject:PostDataType = {id: new Date().getTime(), text: newPost, likes: 0}
    state.profilePage.posts.push(newObject)
}


