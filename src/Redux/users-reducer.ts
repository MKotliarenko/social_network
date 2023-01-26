import {AppDispatch} from "./redux-store";
import {followApi, usersApi} from "../api/api";

export type UsersStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
    followingIdUser: Array<number>

}
export type UserType = {
    id: number
    photos: { small: string, large: string }
    followed: boolean
    name: string
    status: string
    // location: { city: string, country: string }

}
type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
type toggleFollowingInProgressACType = ReturnType<typeof toggleFollowingInProgressAC>
type ActionsType = FollowACType | UnfollowACType | SetUsersACType | setCurrentPageACType | setTotalUsersCountACType
    | toggleIsFetchingACType | toggleFollowingInProgressACType

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,
    followingIdUser: []

}

export const usersReducer = (state: UsersStateType = initialState, action: ActionsType): UsersStateType => {
    switch (action.type) {
        case "FOLLOW" : {
            return {...state, users: state.users.map(u => u.id === action.usersID ? {...u, followed: true} : u)}
        }
        case "UNFOLLOW" : {
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        }
        case "SET_USERS": {
            return {...state, users: action.newUsers}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: state.currentPage = action.pageNumber}
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalUsersCount: action.usersCount}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE_FOLLOWING_IN_PROGRESS": {
            return {
                ...state,
                followingIdUser: action.followingInProgress ?
                    [...state.followingIdUser, action.userId] :
                    state.followingIdUser.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export const followAC = (userID: number) => {
    return {type: "FOLLOW", usersID: userID} as const
}
export const unfollowAC = (userID: number) => {
    return {type: "UNFOLLOW", userID: userID} as const
}
export const setUsersAC = (newUsers: Array<UserType>) => {
    return {type: "SET_USERS", newUsers: newUsers} as const
}
export const setCurrentPageAC = (pageNumber: number) => {
    return {type: "SET_CURRENT_PAGE", pageNumber: pageNumber} as const
}
export const setTotalUsersCountAC = (usersCount: number) => {
    return {type: "SET_TOTAL_USERS_COUNT", usersCount: usersCount} as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {type: "TOGGLE_IS_FETCHING", isFetching: isFetching} as const
}
export const toggleFollowingInProgressAC = (followingInProgress: boolean, userId: number) => {
    return {type: "TOGGLE_FOLLOWING_IN_PROGRESS", followingInProgress: followingInProgress, userId: userId} as const
}

export const getUsersThunkCreator = (pageSize: number, currentPage: number) => {
    return (dispatch: AppDispatch) => {
        dispatch(toggleIsFetchingAC(true))
        usersApi.getUsers(pageSize, currentPage).then((data) => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))
        })
    }
}
export const getUsersPageNumberThunkCreator = (pageSize: number, pageNumber: number) => {
    return (dispatch: AppDispatch) => {
        dispatch(setCurrentPageAC(pageNumber))
        dispatch(toggleIsFetchingAC(true))
        usersApi.getUsers(pageSize, pageNumber).then((data) => {
            dispatch(setUsersAC(data.items))
            dispatch(toggleIsFetchingAC(false))
        })
    }
}
export const followThunkCreator = (userId:number) => {
    return (dispatch:AppDispatch) => {
        dispatch(toggleFollowingInProgressAC(true, userId))
        followApi.postFollow(userId).then((data)=>{
            if(data.resultCode==0){
                dispatch(followAC(userId));
            }
            dispatch(toggleFollowingInProgressAC(false, userId))
        });


    }
}
export const unfollowThunkCreator = (userId:number) => {
    return (dispatch:AppDispatch) => {
        dispatch(toggleFollowingInProgressAC(true, userId))
        followApi.deleteUnFollow(userId)
            .then((data)=>{
                if(data.resultCode==0){
                    dispatch(unfollowAC(userId));
                }
                dispatch(toggleFollowingInProgressAC(false, userId))
            });
    }
}