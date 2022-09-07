import React, {ChangeEvent} from 'react';
import {addPostAC, changeInputAC} from '../../../Redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from "react-redux";
import {RootStateTypeForConnect} from "../../../Redux/redux-store";

const mapStateToProps = (state: RootStateTypeForConnect) => {
    return {
        posts: state.profilePage.posts,
        newPostsText: state.profilePage.newPostsText
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    addPost:addPostAC,changeInput:changeInputAC
})(MyPosts)