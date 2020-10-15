import React from "react";
import {addPostActionCreator, deletePostAC, ProfileActionTypes} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {Store} from "redux";
import {connect} from "react-redux";
import {stateType} from "../../../redux/dialogs-reducer";

export type postsType = {
    id: number | string;
    message: string;
    countLikes: number;
};
export type propsType = {
    store: Store
};


const mapStateToProps = (state: stateType) => {
    return {
        posts: state.profilePage.posts,

    }
}

let mapDispatchToProps = (dispatch: (action: ProfileActionTypes) => void) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        },
        deletePost: (postId: number|string) => {
            dispatch(deletePostAC(postId))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;


// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store: Store) => {
//                 let state = store.getState()
//
//                 // let addPost = () => {
//                 //     store.dispatch(addPostActionCreator())
//                 // }
//
//                 let onChangePost = (text: string) => {
//                     let action = updateNEwPostTextActionCreator(text);
//                     store.dispatch(action)
//                 }
//                 return <MyPosts
//                     *******updateNEwPostText={onChangePost}
//                     *****addPost={addPost}
//                    ******** posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//     )
//
// }