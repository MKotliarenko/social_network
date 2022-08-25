import React, {ChangeEvent} from 'react';
import {addPostAC, changeInputAC} from '../../../Redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from "react-redux";
import {AppDispatch, RootStateTypeForConnect} from "../../../Redux/redux-store";

const mapStateToProps = (state: RootStateTypeForConnect) => {
    return {
        posts: state.profilePage.posts,
        newPostsText: state.profilePage.newPostsText
    }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        changeInput: (newText: string) => {
            dispatch(changeInputAC(newText))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)