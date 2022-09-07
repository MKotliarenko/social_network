import React from 'react';
import {connect} from 'react-redux';
import {RootStateTypeForConnect} from '../../Redux/redux-store';
import {followThunkCreator, getUsersPageNumberThunkCreator, getUsersThunkCreator,
    unfollowThunkCreator, UserType} from '../../Redux/users-reducer';
import {Users} from './Users';
import Preloader from "../Common/Preloader/Preloader";

//------ClassComponent

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
    followingInProgress: boolean
    followingIdUser: Array<number>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    getUsers: (pageSize: number, currentPage: number) => void
    getUsersWithPageNumber: (pageSize: number, pageNumber: number) => void

}

export class UsersContainerAJAX extends React.Component <UsersPropsType, Array<UserType>> {
    // constructor(props: UsersPropsType) {
    //     super(props);
    // }
    // muss man nicht schreiben wen man nur props zur supper weiterleitet
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onPageSelected = (pageNumber: number) => {
        this.props.getUsersWithPageNumber(this.props.pageSize, pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage} users={this.props.users} unfollow={this.props.unfollow}
                   follow={this.props.follow} onPageSelected={this.onPageSelected}
                   followingInProgress={this.props.followingInProgress}
                   followingIdUser={this.props.followingIdUser}
            />
        </>
    }
}

//------


const mapStateToProps = (state: RootStateTypeForConnect) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        followingIdUser: state.usersPage.followingIdUser

    }
}
export const UsersContainer = connect(mapStateToProps, {
    unfollow: unfollowThunkCreator,
    getUsers: getUsersThunkCreator,
    getUsersWithPageNumber: getUsersPageNumberThunkCreator,
    follow:followThunkCreator
})(UsersContainerAJAX)

// const mapDispatchToProps = (dispatch: AppDispatch) => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (newUsers: Array<UserType>) => {
//             dispatch(setUsersAC(newUsers))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (usersCount: number) => {
//             dispatch(setTotalUsersCountAC(usersCount))
//         },
//         toggleIsFetching: (isFetching:boolean)=>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }
// Mann kann im Connect als zweite Parametr nur Objekt mit AC schreiben.

