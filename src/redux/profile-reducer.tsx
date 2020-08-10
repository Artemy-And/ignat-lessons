import {postsType} from "../components/Profile/MyPosts/MyPosts"
import {stateType, postsTypeState} from "./state";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_POST = "ADD-POST"



let initialState={
    posts: [
        {id: 1, message: "Hi, how are you?", countLikes: 10},
        {id: 2, message: "Hi, how are you?", countLikes: 133},
        {id: 3, message: "Hi, how are you?", countLikes: 4432},
    ],
    newPostText: 'it-kamasutra'
}


function profileReducer(state:postsTypeState=initialState, action: ProfileActionTypes):postsTypeState {
    switch(action.type){
        case ADD_POST: {

            let newPost: postsType = {
                id: 5,
                message: state.newPostText,
                countLikes: 0
            };
            return {
                ...state,
                posts : [...state.posts,newPost],
                newPostText:"",
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText :action.newText
                // posts : [...state.posts]
            }
        }
        default:return state
    }


}

export const addPostActionCreator = ():AddPostActionCreatorType => ({type: ADD_POST})

export const updateNEwPostTextActionCreator = (text: string):UpdateNEwPostTextActionCreatorType => ({
    type: UPDATE_NEW_POST_TEXT, newText: text,
})

export type ProfileActionTypes= AddPostActionCreatorType | UpdateNEwPostTextActionCreatorType




type AddPostActionCreatorType = {
    type:typeof ADD_POST
}
type UpdateNEwPostTextActionCreatorType={
    type:typeof UPDATE_NEW_POST_TEXT
    newText:string;
}


export default profileReducer