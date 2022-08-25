export type dialogsPageType = {
    dialogsData: Array<DialogsDataType>, massagesData: Array<MassagesDataType>,
    newMassageText: string
}
export type MassagesDataType = {
    id: number
    text: string
}
export type DialogsDataType = {
    id: number
    name: string
    img: string
}

export type AddMassageToDialogActionType = ReturnType<typeof addMassageAC>
export type UpdateDialogInputActionType = ReturnType<typeof changeInputDialogAC>
export type DialogsActionsType = UpdateDialogInputActionType | AddMassageToDialogActionType


const initialState: dialogsPageType = {
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
    ],
    newMassageText: ""
}

export const dialogsReducer = (state: dialogsPageType = initialState, action: DialogsActionsType): dialogsPageType => {
    switch (action.type) {
        case "ADD-MASSAGE-TO-DIALOG": {
            const newMassage = {id: new Date().getTime(), text: action.newMassage}
            //const stateCopy = {...state, massagesData: [...state.massagesData, newMassage], newMassageText: ""}
            //stateCopy.massagesData = [...state.massagesData]
            //stateCopy.massagesData.push(newMassage)
            //stateCopy.newMassageText = ""
            return {...state, massagesData: [...state.massagesData, newMassage], newMassageText: ""};
        }
        case "UPDATE-INPUT-DIALOG": {
            //const stateCopy = {...state, newMassageText: action.newDialogText}
            //stateCopy.newMassageText = action.newDialogText
            return {...state, newMassageText: action.newDialogText};
        }
        default:
            return state
    }
}

// ACTION CREATER
export const changeInputDialogAC = (newDialogText: string) =>
    ({type: "UPDATE-INPUT-DIALOG", newDialogText: newDialogText} as const)
export const addMassageAC = (newMassage: string) =>
    ({type: "ADD-MASSAGE-TO-DIALOG", newMassage: newMassage} as const)
// wenn die Funktion nur etwas retourniert, kann man sie ohne {return . . . }, aber mit () schreiben
