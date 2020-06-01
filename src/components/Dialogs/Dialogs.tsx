import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Artemy"},
        {id: 2, name: "Alevtina"},
        {id: 3, name: "Akseniya"},
        {id: 4, name: "Afonasii"},
        {id: 5, name: "Belanton"},
        {id: 6, name: "Stephan"},
        {id: 7, name: "Stephan"},
        {id: 8, name: "Stephan"},
        {id: 9, name: "Stephan"}
    ]
    let dialogsMessagesData = [
        {id: 1, message: "Halllooo?"},
        {id: 2, message: "Hey how are you?"},
        {id: 3, message: "Hey how are you?"},
        {id: 4, message: "Hey Buddy"},
        {id: 5, message: "Hey how are you?"},
        {id: 6, message: "Hey how are you?"},
        {id: 7, message: "Hey how are you?"},
        {id: 8, message: "Hey how are you?"},
        {id: 9, message: "Hey how are you?"},
        {id: 10, message: "Hey Buddy"},
        {id: 11, message: "Hey how are you?"},
        {id: 12, message: "Hey how are you?"},
    ]


    let newDialogs = dialogsData
        .map(
            dialog => {
                return <DialogItem name={dialog.name} id={dialog.id}
                />
            });

    let newDialogsMessages = dialogsMessagesData
        .map(message => <Message message={message.message}
        />);


    return (
        <div className={classes.dialogsAll}>

            <div className={classes.dialogs}>
                {newDialogs}
            </div>

            <div className={classes.messages}>
                {newDialogsMessages}
            </div>


        </div>


    )

}

export default Dialogs