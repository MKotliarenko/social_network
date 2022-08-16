export type DialogsDataType = {
    id: number
    name: string
    img: string
}
export type MassagesDataType = {
    id: number
    text: string
}
export type PostDataType = {
    id: number
    text: string
    likes: number

}
export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    subscribe: (observer: observerType) => void,
    _renderEntireTree: () => void,
    dispatch: (action: ActionsTypes) => void

}
export type profilePageType = { posts: Array<PostDataType>, newPostsText: string }
export type dialogsPageType = { dialogsData: Array<DialogsDataType>, massagesData: Array<MassagesDataType>, newMassageText: string }
type observerType = () => void
type AddPostToStateActionType = { type: "ADD-POST-TO-STATE", newPost: string }
type UpdateChangeInputActionType = { type: "UPDATE-CHANGE-INPUT", newText: string }
type UpdateDialogInputActionType = { type: "UPDATE-INPUT-DIALOG", newDialogText: string }
type AddMassageToDialogActionType = { type: "ADD-MASSAGE-TO-DIALOG", newMassage: string }
export type ActionsTypes = AddPostToStateActionType | UpdateChangeInputActionType
    | UpdateDialogInputActionType | AddMassageToDialogActionType


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: "Hello, how are you?", likes: 15},
                {id: 2, text: "hi, it's my first post", likes: 20},
                {id: 3, text: "Ok", likes: 5},
            ], newPostsText: ""
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
            ], newMassageText: ""
        }
    },
    _renderEntireTree() {
        console.log("State change")
    },


    subscribe(observer) {
        this._renderEntireTree = observer
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        switch (action.type) {
            case "ADD-POST-TO-STATE":
                const newObject: PostDataType = {id: new Date().getTime(), text: action.newPost, likes: 0}
                this._state.profilePage.posts.push(newObject)
                this._state.profilePage.newPostsText = ""
                this._renderEntireTree()
                break;
            case "UPDATE-CHANGE-INPUT":
                this._state.profilePage.newPostsText = action.newText
                this._renderEntireTree()
                break;
            case "UPDATE-INPUT-DIALOG":
                this._state.dialogsPage.newMassageText = action.newDialogText
                this._renderEntireTree()
                break;
            case "ADD-MASSAGE-TO-DIALOG":
                const newMassage = {id: new Date().getTime(), text: action.newMassage}
                this._state.dialogsPage.massagesData.push(newMassage)
                this._state.dialogsPage.newMassageText = ""
                this._renderEntireTree()
                break;
            default:
                return store
        }

    }

}
// ACTION CREATER
export const addPostAC = (newPostsText: string): AddPostToStateActionType =>
    ({type: "ADD-POST-TO-STATE", newPost: newPostsText})
export const changeInputAC = (newText: string): UpdateChangeInputActionType =>
    ({type: "UPDATE-CHANGE-INPUT", newText: newText})
export const changeInputDialogAC = (newDialogText: string): UpdateDialogInputActionType =>
    ({type: "UPDATE-INPUT-DIALOG", newDialogText: newDialogText})
export const addMassageAC = (newMassage: string): AddMassageToDialogActionType => (
    {type: "ADD-MASSAGE-TO-DIALOG", newMassage: newMassage}
)

// wenn die Funktion nur etwas retourniert, kann man sie ohne {return . . . }, aber mit () schreiben



