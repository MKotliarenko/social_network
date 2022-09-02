import {profilePageType} from "./profile-reducer";

export type AuthStateType = {
    id: number | null
    email: string
    login: string
    isAuth: boolean
}
export type userDateType = { id: null, email: '', login: '', }


const initialState: AuthStateType = {
    id: null,
    email: '',
    login: '',
    isAuth: false
}
type AuthActionsTypes = ReturnType<typeof setUserDataAC>

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsTypes): AuthStateType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {
                ...state,
                id: action.userData.id,
                email: action.userData.email,
                login: action.userData.login,
                isAuth: true
            }
        }
        default :
            return state
    }
}

// ACTION CREATER
export const setUserDataAC = (userData: userDateType) =>
    ({type: "SET_USER_DATA", userData: userData} as const)
