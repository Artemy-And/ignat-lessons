import React from "react";
import {postsTypeState} from "./state";
import profileReducer, {addPostActionCreator, deletePostAC} from "./profile-reducer";


test('new post should be added', () => {
    let state: postsTypeState = {
        posts: [
            {id: 1, message: "Hi, how are you?", countLikes: 10},
            {id: 2, message: "Hi, how are you?", countLikes: 133},
            {id: 3, message: "Hi, how are you?", countLikes: 4432},
        ],
        profile: null,
        status: ""
    }
    const newPost = 'lanfren lanfra'
    const action = addPostActionCreator(newPost)


    const endState = profileReducer(state, action)
    expect(endState.posts[3].message.length).toBe(14)
    expect(endState.posts[3].message).toBe(newPost)
    // expect(endState[1].entityStatus).toBe('idle')

})

test('post should be deleted', () => {
    let state: postsTypeState = {
        posts: [
            {id: 1, message: "Hi, how are you?", countLikes: 10},
            {id: 2, message: "Hi, how are you?", countLikes: 133},
            {id: 3, message: "Hi, how are you?", countLikes: 4432},
        ],
        profile: null,
        status: ""
    }

    const action = deletePostAC(3)


    const endState = profileReducer(state, action)
    expect(endState.posts.length).toBe(2)


})