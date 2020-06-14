import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export type dialogsDataType = {
  id: number;
  name: string;
};
export type dialogsMessagesDataType = {
  id: number;
  message: string;
};

type dialogsAndMessagesType = {
  messages: Array<dialogsMessagesDataType>;
  dialogs: Array<dialogsDataType>;
};

const Dialogs = (props: dialogsAndMessagesType) => {
  let newDialogs = props.dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });

  let newDialogsMessages = props.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newPostElement: any = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
alert(text)
  }

  return (
    <div className={classes.dialogsAll}>
      <div className={classes.dialogs}>{newDialogs}</div>

      <div>
        <textarea ref={newPostElement}></textarea>


        <button onClick={addPost}>Add post</button>
      </div>


      <div className={classes.messages}>{newDialogsMessages}</div>

    </div>
  );
};

export default Dialogs;
