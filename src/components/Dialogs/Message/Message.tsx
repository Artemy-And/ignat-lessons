import React from "react";
import classes from "./../Dialogs.module.css";

type DialogsMessagesType = {
  message: string;
};

const Message = (props: DialogsMessagesType) => {

  return(
    <div className={classes.container}>
      <div className={classes.messageblue}>
        <div className={classes.message}>{props.message}</div>
          {/*<button>Del</button>*/}
        <div className={classes.messagetimestampleft}>17:15</div>
      </div>
    </div>

)

};

export default Message;
