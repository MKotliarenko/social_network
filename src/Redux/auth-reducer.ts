import UsersPhoto from "../assets/images/usersava.png";
import {AppDispatch} from "./redux-store";
import {authApi, profileApi} from "../api/api";

export type AuthStateType = {
    id: number | null
    email: string
    login: string
    isAuth: boolean
    photos:string
}
export type userDateType = { id: number|null, email:string, login: string}

const initialState: AuthStateType = {
    id: null,
    email: '',
    login: '',
    isAuth: false,
    photos:''
}
type SetUserDataType = ReturnType<typeof setUserDataAC>
type SetUserAvaTypes = ReturnType<typeof setUserAvaAC>
type AuthActionsTypes = SetUserDataType|SetUserAvaTypes

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
        case "SET_USER_AVA": {
            const photos:string = action.userAva
            if(photos)
            {
                return {...state, photos:photos}
            }
            else{return {...state, photos:UsersPhoto}}

        }
        default :
            return state
    }
}

// ACTION CREATER
export const setUserDataAC = (userData: userDateType) =>
    ({type: "SET_USER_DATA", userData: userData} as const)
export const setUserAvaAC = (userAva: string) =>
{ return {type: "SET_USER_AVA", userAva: userAva}as const}

export const getAuthThunkCreator =()=>{
    return (dispatch:AppDispatch) => {
        authApi.getAuth().then((data) => {
            if (!data.resultCode) {
                dispatch(setUserDataAC(data.data))
                profileApi.getProfile(data.data.id).then((data) => {
                    dispatch(setUserAvaAC(data.photos.small));
                })
            }
        })
    }
}
