import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessageCreator,
    addPostActionCreator,
    dialogsTypeState,
    updateNEwMessageTextCreator,
    updateNEwPostTextActionCreator
} from "../../redux/state";

export type dialogsDataType = {
    id: number;
    name: string;
};
export type dialogsMessagesDataType = {
    id: number;
    message: string;
};


type dialogsAndMessagesType = {
    state: dialogsTypeState
    dispatch: (action: any) => void

    // newMessageText:string

};

const Dialogs = (props: dialogsAndMessagesType) => {
    let newDialogs = props.state.dialogs.map((dialog: dialogsDataType) => {
        return <DialogItem name={dialog.name} id={dialog.id}/>;
    });

    let newDialogsMessages = props.state.messages.map((message: dialogsMessagesDataType) => (
        <Message message={message.message}/>
    ));

    let newPostElement: any = React.createRef();

    let addPost = () => {
        props.dispatch(addMessageCreator())
        newPostElement.current.value = ""
    }

    let onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        // let text = newPostElement.current!.value;
        let text = event.currentTarget.value
        let action = updateNEwMessageTextCreator(text);
        props.dispatch(action);

    }

    return (
        <div className={classes.dialogsAll}>
            <div className={classes.dialogs}>{newDialogs}</div>

            <div>
                <textarea
                    ref={newPostElement}
                    onChange={onChangeMessage}
                    value={props.state.newMessageText}>
                </textarea>


                <button onClick={addPost}>Add post</button>
            </div>


            <div className={classes.messages}>{newDialogsMessages}</div>

        </div>
    );
};

export default Dialogs;
