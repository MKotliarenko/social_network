export type PostDataType = {
    id: number
    text: string
    likes: number
}
export type profilePageType = { posts: Array<PostDataType>, newPostsText: string, userProfile:UserProfileType }
export type UserProfileType = {
    aboutMe:string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}|null

export type AddPostToStateActionType = ReturnType<typeof addPostAC>
export type UpdateChangeInputActionType = ReturnType<typeof changeInputAC>
export type setUserProfileACType = ReturnType<typeof setUserProfileAC>

export type ProfileActionsTypes = AddPostToStateActionType | UpdateChangeInputActionType|setUserProfileACType


const initialState: profilePageType = {
    posts: [
        {id: 1, text: "Hello, how are you?", likes: 15},
        {id: 2, text: "hi, it's my first post", likes: 20},
        {id: 3, text: "Ok", likes: 5},
    ],
    newPostsText: "",
    userProfile: null
}

export const profileReducer = (state: profilePageType = initialState, action: ProfileActionsTypes): profilePageType => {
    switch (action.type) {
        case "ADD-POST-TO-STATE": {
            const newObject: PostDataType = {id: new Date().getTime(), text: state.newPostsText, likes: 0}
            //let stateCopy = {...state, posts: [...state.posts, newObject], newPostsText: ""}
            //stateCopy.posts = [...state.posts]
            //stateCopy.posts.push(newObject);
            //stateCopy.newPostsText = ""
            return {...state, posts: [...state.posts, newObject], newPostsText: ""};
        }
        case "UPDATE-CHANGE-INPUT": {
            //const stateCopy = {...state, newPostsText: action.newText}
            //stateCopy.newPostsText = action.newText
            return {...state, newPostsText: action.newText};
        }
        case "SET_USER_PROFILE": {
            return {...state, userProfile: action.userProfile};
        }
        default :
            return state
    }
}

// ACTION CREATER
export const addPostAC = () =>
    ({type: "ADD-POST-TO-STATE"} as const)
export const changeInputAC = (newText: string) =>
    ({type: "UPDATE-CHANGE-INPUT", newText: newText} as const)
export const setUserProfileAC = (userProfile:UserProfileType) =>
    ({type: "SET_USER_PROFILE", userProfile:userProfile} as const)

// wenn die Funktion nur etwas retourniert, kann man sie ohne {return . . . }, aber mit () schreiben
