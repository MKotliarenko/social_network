import React from 'react';
import {connect} from 'react-redux';
import {RootStateTypeForConnect} from '../../Redux/redux-store';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC,
    UserType
} from '../../Redux/users-reducer';
import * as axios from 'axios';
import {AxiosResponse} from "axios";
import {Users} from './Users';
import Preloader from "../Common/Preloader/Preloader";

//------ClassComponent

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (newUsers: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (usersCount: number) => void
    toggleIsFetching:(isFetching:boolean)=>void
    isFetching:boolean

}

export class UsersContainerAJAX extends React.Component <UsersPropsType, Array<UserType>> {
    // constructor(props: UsersPropsType) {
    //     super(props);
    // }
    // muss man nicht schreiben wen man nur props zur supper weiterleitet
    componentDidMount() {
        this.props.toggleIsFetching(true)
        //@ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response: AxiosResponse) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageSelected = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        //@ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then((response: AxiosResponse) => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/>: null}
            <Users pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount}
                      currentPage={this.props.currentPage} users={this.props.users} unfollow={this.props.unfollow}
                      follow={this.props.follow} onPageSelected={this.onPageSelected}/>
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
        isFetching: state.usersPage.isFetching

    }
}

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

export const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC
})(UsersContainerAJAX)