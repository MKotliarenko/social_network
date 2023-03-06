import UsersPhoto from "../assets/images/usersava.png";
import {AppDispatch} from "./redux-store";
import {authApi, profileApi} from "../api/api";
import {getAuthThunkCreator} from "./auth-reducer";

export type AppStateType = {
    initialized: boolean
}

const initialState: AppStateType = {
    initialized: false
}
type SetInitializedACType = ReturnType<typeof setInitializedAC>
type AppActionsTypes = SetInitializedACType
export const appReducer = (state: AppStateType = initialState, action: AppActionsTypes): AppStateType => {
    switch (action.type) {
        case "SET_INITIALIZED": {
            return {
                ...state,
                initialized: true
            }
        }
        default :
            return state
    }
}

// ACTION CREATOR
export const setInitializedAC = () =>
    ({type: "SET_INITIALIZED"} as const)

// Thunk CREATOR
export const initializeAppTC = () => {
    return (dispatch: AppDispatch) => {
        const promise = dispatch(getAuthThunkCreator());
        promise.then(() => {
            dispatch(setInitializedAC())
        })
    }
}
