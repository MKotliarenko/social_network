import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
//
// export type DialogsDataType = {
//     id: number
//     name: string
//     img: string
// }
// export type MassagesDataType = {
//     id: number
//     text: string
// }
// export type PostDataType = {
//     id: number
//     text: string
//     likes: number
//
// }
// export type StateType = {
//     profilePage: profilePageType
//     dialogsPage: dialogsPageType
// }
// export type StoreType = {
//     _state: StateType,
//     getState: () => StateType,
//     subscribe: (observer: observerType) => void,
//     _renderEntireTree: () => void,
//     dispatch: (action: ActionsTypes) => void
//
// }
// export type profilePageType = { posts: Array<PostDataType>, newPostsText: string }
// export type dialogsPageType = { dialogsData: Array<DialogsDataType>, massagesData: Array<MassagesDataType>, newMassageText: string }
// type observerType = () => void
// export type AddPostToStateActionType = { type: "ADD-POST-TO-STATE", newPost: string }
// export type UpdateChangeInputActionType = { type: "UPDATE-CHANGE-INPUT", newText: string }
// export type UpdateDialogInputActionType = { type: "UPDATE-INPUT-DIALOG", newDialogText: string }
// export type AddMassageToDialogActionType = { type: "ADD-MASSAGE-TO-DIALOG", newMassage: string }
// export type ActionsTypes = AddPostToStateActionType | UpdateChangeInputActionType
//     | UpdateDialogInputActionType | AddMassageToDialogActionType
//
//
// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, text: "Hello, how are you?", likes: 15},
//                 {id: 2, text: "hi, it's my first post", likes: 20},
//                 {id: 3, text: "Ok", likes: 5},
//             ], newPostsText: ""
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {id: 1, name: "Barbara", img: "https://cdn-icons-png.flaticon.com/512/194/194938.png"},
//                 {id: 2, name: "Marina", img: "https://cdn-icons-png.flaticon.com/512/194/194932.png"},
//                 {id: 3, name: "SJR", img: "https://cdn-icons-png.flaticon.com/512/194/194937.png"},
//                 {id: 4, name: "Anton", img: "https://cdn-icons-png.flaticon.com/512/194/194935.png"},
//                 {id: 5, name: "Papa", img: "https://cdn-icons-png.flaticon.com/512/194/194933.png"},
//                 {id: 6, name: "Mama", img: "https://cdn-icons-png.flaticon.com/512/194/194936.png"},
//             ],
//             massagesData: [
//                 {id: 1, text: "hi"},
//                 {id: 2, text: "How are you?"},
//                 {id: 3, text: "how is your JavaScript?"},
//             ], newMassageText: ""
//         }
//     },
//
//     _renderEntireTree() {
//         console.log("State change")
//     },
//     subscribe(observer) {
//         this._renderEntireTree = observer
//     },
//     getState() {
//         return this._state;
//     },
//
//     dispatch(action) {
//                 this._state.profilePage = profileReducer(this._state.profilePage, action)
//                 this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//                 this._renderEntireTree()
//         }
// }
//
//
//
//
