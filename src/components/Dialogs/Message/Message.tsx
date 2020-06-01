import React from "react";
import classes from "./../Dialogs.module.css";



type DialogsMessagesType = {

    message: string
}

const Message = (props: DialogsMessagesType) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>)
}





export default Message