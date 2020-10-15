import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {InjectedFormProps, Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {postsType} from "../../../redux/profile-reducer";


export type propsType = {
    posts: Array<postsType>;
    addPost: (newPostText: any) => void
    deletePost: (postId: number | string) => void


};

const MyPosts = React.memo((props: propsType) => {
    let newMessagesData = props.posts.map((item: any) => {
        return <Post key={item.id} message={item.message} likesCount={item.countLikes} onDeletePost={props.deletePost}
                     id={item.id}/>;
    });

    const addNewPost = (value: any) => {
        props.addPost(value.newPostText)
    }


    return (
        <div className={classes.postAll}>
            <p className={classes.post}>My posts</p>
            <MyPostsFormReduxForm onSubmit={addNewPost}/>
            <div className={classes.posts}>{newMessagesData}</div>
        </div>
    );
});

type FormDataType = {
    newPostText: string
}
const maxLengthCreator10 = maxLengthCreator(10)
const MyPostsForm: React.FC<InjectedFormProps<FormDataType>> = React.memo((props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <div>
                <Field
                    placeholder={'write new post'}
                    name={'newPostText'}
                    component={Textarea}
                    validate={[required, maxLengthCreator10]}
                ></Field>
            </div>
            <div>
                <button className={classes.myButton}>Add post</button>

            </div>
        </div>
    </form>)
})
export const MyPostsFormReduxForm = reduxForm<FormDataType>({form: 'MyPosts'})(MyPostsForm)


export default MyPosts;
