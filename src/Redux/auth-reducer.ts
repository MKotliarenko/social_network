import UsersPhoto from "../assets/images/usersava.png";
import {AppDispatch} from "./redux-store";
import {authApi, profileApi} from "../api/api";

export type AuthStateType = {
    id: number | null,
    email: string| null,
    login: string| null,
    isAuth: boolean,
    photos: string
}
export type UserDateType = { id: number | null, email: string | null, login: string | null }
export type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photos: ''
}
type SetUserDataType = ReturnType<typeof setUserDataAC>
type SetUserAvaTypes = ReturnType<typeof setUserAvaAC>
type SetLoginACTypes = ReturnType<typeof setLoginAC>
type AuthActionsTypes = SetUserDataType | SetUserAvaTypes | SetLoginACTypes

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsTypes): AuthStateType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {
                ...state,
                id: action.userData.id,
                email: action.userData.email,
                login: action.userData.login,
                isAuth: action.isAuth
            }
        }
        case "SET_USER_AVA": {
            const photos: string = action.userAva
            if (photos) {
                return {...state, photos: photos}
            } else {
                return {...state, photos: UsersPhoto}
            }
        }
        case "SET_LOGIN": {
            return {
                ...state, id: action.id
            }
        }
        default :
            return state
    }
}

// ACTION CREATOR
export const setUserDataAC = (userData: UserDateType, isAuth:boolean) =>
    ({type: "SET_USER_DATA", userData: userData, isAuth:isAuth} as const)
export const setUserAvaAC = (userAva: string) => {
    return {type: "SET_USER_AVA", userAva: userAva} as const
}
export const setLoginAC = (id: number) => {
    return {type: "SET_LOGIN", id: id} as const
}

// Thunk CREATOR
export const getAuthThunkCreator = () => {
    return (dispatch: AppDispatch) => {
        authApi.getAuth().then((data) => {
            if (!data.resultCode) {
                dispatch(setUserDataAC(data.data, true))
                profileApi.getProfile(data.data.id).then((data) => {
                    dispatch(setUserAvaAC(data.photos.small));
                })
            }
        })
    }
}
export const postLoginThunkCreator = (loginData: LoginDataType) => {
    return (dispatch: AppDispatch) => {
        authApi.postLogin(loginData).then((data) => {
            if (!data.resultCode) {
                dispatch(getAuthThunkCreator())
            }
        })
    }
}

export const deleteLogoutThunkCreator = () => {
    return (dispatch: AppDispatch) => {
        authApi.deleteLogout().then((data) => {
            if (!data.resultCode) {
                dispatch(setUserDataAC({id:null, email: null, login: null}, false))
            }
        })
    }
}
