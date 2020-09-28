import React from "react";
import {addPostActionCreator, ProfileActionTypes} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {Store} from "redux";
import {stateType} from "../../../redux/state";
import {connect} from "react-redux";

export type postsType = {
    id: number;
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
        addPost: (newPostText:string) => {
            dispatch(addPostActionCreator(newPostText))
        },
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)


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