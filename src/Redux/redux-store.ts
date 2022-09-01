import {combineReducers, createStore, Store} from "redux";
import { profileReducer} from "./profile-reducer";
import { dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";

// returniert alle ActionsType von redusers
export type GetAllReduxActions<T> = T extends (state: any, actions: infer Actions, ...args: any[]) => any
    ? keyof Actions extends []
        ? never
        : Actions
    : T extends Record<string, infer Values>
        ? GetAllReduxActions<Values>
        : never
//-----------------------


const rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer
})

export const store = createStore(rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>
export type RootActions = GetAllReduxActions<typeof rootReducer>
export type RootStateTypeForConnect = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export type RootStore = Store<RootStateType, RootActions>

// @ts-ignore
window.store=store;