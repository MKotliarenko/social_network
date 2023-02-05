import {AppDispatch} from "./redux-store";
import {profileApi} from "../api/api";

export type PostDataType = {
    id: number
    text: string
    likes: number
}
export type profilePageType = {
    posts: Array<PostDataType>, newPostsText: string,
    userProfile: UserProfileType, status: string
}
export type UserProfileType = {
    aboutMe: string
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
} | null

export type AddPostToStateActionType = ReturnType<typeof addPostAC>
export type UpdateChangeInputActionType = ReturnType<typeof changeInputAC>
export type setUserProfileACType = ReturnType<typeof setUserProfileAC>
export type setProfileStatusACType = ReturnType<typeof setProfileStatusAC>

export type ProfileActionsTypes = AddPostToStateActionType | UpdateChangeInputActionType |
    setUserProfileACType | setProfileStatusACType


const initialState: profilePageType = {
    posts: [
        {id: 1, text: "Hello, how are you?", likes: 15},
        {id: 2, text: "hi, it's my first post", likes: 20},
        {id: 3, text: "Ok", likes: 5},
    ],
    newPostsText: "",
    userProfile: null,
    status: ""
}

export const profileReducer = (state: profilePageType = initialState, action: ProfileActionsTypes): profilePageType => {
    switch (action.type) {
        case "ADD-POST-TO-STATE": {
            const newObject: PostDataType = {id: new Date().getTime(), text: state.newPostsText, likes: 0}
            //let stateCopy = {...state, posts: [...state.posts, newObject], newPostsText: ""}
            //stateCopy.posts = [...state.posts]
            //stateCopy.posts.push(newObject);
            //stateCopy.newPostsText = ""
            return {...state, posts: [newObject, ...state.posts], newPostsText: ""};
        }
        case "UPDATE-CHANGE-INPUT": {
            //const stateCopy = {...state, newPostsText: action.newText}
            //stateCopy.newPostsText = action.newText
            return {...state, newPostsText: action.newText};
        }
        case "SET_USER_PROFILE": {
            return {...state, userProfile: action.userProfile};
        }
        case "SET_PROFILE_STATUS": {
            return {...state, status: action.profileStatus}
        }
        default :
            return state
    }
}

// ACTION CREATOR
export const addPostAC = () =>
    ({type: "ADD-POST-TO-STATE"} as const)
export const changeInputAC = (newText: string) =>
    ({type: "UPDATE-CHANGE-INPUT", newText: newText} as const)
export const setUserProfileAC = (userProfile: UserProfileType) =>
    ({type: "SET_USER_PROFILE", userProfile: userProfile} as const)
export const setProfileStatusAC = (profileStatus: string) =>
    ({type: "SET_PROFILE_STATUS", profileStatus: profileStatus} as const)

//THUNK CREATOR
export const getProfileThunkCreator = (userId: string) => {
    return (dispatch: AppDispatch) => {
        profileApi.getProfile(userId).then((data) => {
            dispatch(setUserProfileAC(data));
        })
    }
}
export const getStatusThunkCreator = (userId: string) => {
    return (dispatch: AppDispatch) => {
        profileApi.getStatus(userId).then((data) => {
            dispatch(setProfileStatusAC(data))
        })
    }
}
export const changeStatusThunkCreator = (status: string) => {
    return (dispatch: AppDispatch) => {
        profileApi.changeStatus(status).then((data) => {
            data.resultCode===0?dispatch(setProfileStatusAC(status)) :
                alert(data.messages)
        })
    }
}

// wenn die Funktion nur etwas retourniert, kann man sie ohne {return . . . }, aber mit () schreiben
