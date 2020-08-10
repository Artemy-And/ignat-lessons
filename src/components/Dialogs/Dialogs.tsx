import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    dialogsTypeState,
} from "../../redux/state";
// import {addMessageCreator, updateNEwMessageTextCreator, DialogsActionType} from "../../redux/dialogs-reducer"
// import {ConnectedComponent} from "react-redux";


export type dialogsDataType = {
    id: number;
    name: string;
};
export type dialogsMessagesDataType = {
    id: number;
    message: string;
};


type dialogsAndMessagesType = {
    // newMessageText:string
    // state: dialogsTypeState
    // dispatch: (action: DialogsActionType) => void

    updateNewMessageText:(text:string)=>void
    addMessageCreator:()=>void
    dialogsPage:dialogsTypeState
    connect:Function
    updateNEwMessageTextCreator:(text:string)=>void
    //DialogsContainer: ConnectedComponent<(props: dialogsAndMessagesType) => JSX.Element, Pick<dialogsAndMessagesType, "updateNewMessageText" | "connect">>




};

const Dialogs = (props: dialogsAndMessagesType) => {

    let state = props.dialogsPage


    let newDialogs = state.dialogs.map((dialog: dialogsDataType) => {
        return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>;
    });
    let newDialogsMessages = state.messages.map((message: dialogsMessagesDataType) => (
        <Message message={message.message} key={message.id}/>
    ));
    // let newMessageText = state.newMessageText;
    // let newPostElement: any = React.createRef();

    let addPost = () => {
        props.addMessageCreator()
        // newPostElement.current.value = ""
    }

    let onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.updateNEwMessageTextCreator(text)


    }

    return (
        <div className={classes.dialogsAll}>
            <div className={classes.dialogs}>{newDialogs}</div>

            <div>
                <textarea
                    // ref={newPostElement}
                    onChange={onChangeMessage}
                    value={state.newMessageText}>
                </textarea>


                <button onClick={addPost}>Add post</button>
            </div>


            <div className={classes.messages}>{newDialogsMessages}</div>

        </div>
    );
};

export default Dialogs;
