import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


import {MessagesReduxForm} from "./MessagesByForm";
import {dialogsTypeState} from "../../redux/dialogs-reducer";


export type dialogsDataType = {
    id: number;
    name: string;
};
export type dialogsMessagesDataType = {
    id: number;
    message: string;
};


type dialogsAndMessagesType = {
    updateNewMessageText: (text: string) => void
    addMessageCreator: () => void
    dialogsPage: dialogsTypeState
    updateNEwMessageTextCreator: (text: string) => void
    isAuth: boolean
};

const Dialogs = (props: any) => {

    let state = props.dialogsPage

    let newDialogs = state.dialogs.map((dialog: dialogsDataType) => {
        return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>;
    });
    let newDialogsMessages = state.messages.map((message: dialogsMessagesDataType) => (
        <Message message={message.message} key={message.id}/>
    ));


    const addNewMessage = (value: any) => {

        props.addMessageCreator(value.newMessageText)
    }

    return (
        <div className={classes.dialogsAll}>

            <div className={classes.dialogs}>{newDialogs}</div>

            <div className={classes.messages}>
                <MessagesReduxForm onSubmit={addNewMessage}/>
            </div>



            <div className={classes.messages}>{newDialogsMessages}</div>

        </div>
    );
};

export default Dialogs;
