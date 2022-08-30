export type UsersStateType = {
    users: Array<UserType>,
    pageSize : number,
    totalUsersCount : number,
    currentPage : number
    isFetching:boolean

}
export type UserType = {
    id: number
    photos:{small:string, large:string}
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
type ActionsType = FollowACType|UnfollowACType|SetUsersACType|setCurrentPageACType|setTotalUsersCountACType|toggleIsFetchingACType

const initialState = {
    users: [],
    pageSize : 100,
    totalUsersCount : 0,
    currentPage : 1,
    isFetching : false
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionsType):UsersStateType => {
    switch (action.type){
        case "FOLLOW" : {
            return {...state,users:state.users.map(u=> u.id===action.usersID?{...u,followed:true}:u)}
        }
        case "UNFOLLOW" : {
            return {...state, users:state.users.map(u => u.id===action.userID?{...u,followed:false}:u)}
        }
        case "SET_USERS": {
            return {...state,users: action.newUsers}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage:state.currentPage = action.pageNumber}
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalUsersCount:action.usersCount}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching:action.isFetching}
        }
        default:
            return state
    }
}

export const followAC = (userID:number)=>{
    return {type:"FOLLOW",usersID:userID} as const
}
export const unfollowAC = (userID:number)=>{
    return {type:"UNFOLLOW", userID:userID} as const
}
export const setUsersAC =(newUsers:Array<UserType>)=>{
    return {type:"SET_USERS", newUsers:newUsers} as const
}
export const setCurrentPageAC =(pageNumber:number)=>{
    return {type:"SET_CURRENT_PAGE", pageNumber:pageNumber} as const
}
export const setTotalUsersCountAC =(usersCount:number)=>{
    return {type:"SET_TOTAL_USERS_COUNT", usersCount:usersCount} as const
}
export const toggleIsFetchingAC =(isFetching:boolean)=>{
    return {type:"TOGGLE_IS_FETCHING", isFetching:isFetching} as const
}