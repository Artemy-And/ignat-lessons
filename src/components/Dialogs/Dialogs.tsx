import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsMessageDataType = {}

type DialogsItemType = {
    name: string
    id: number
}

type DialogsMessagesType = {

    message: string
}


const DialogsItem = (props: DialogsItemType) => {
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>

    )
}


const DialogsMessages = (props: DialogsMessagesType) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>)
}
type DialogsDateType = {
    time: string
}
const DialogsHobbies = (props: DialogsDateType) => {
    return (
        <div>
            {props.time}
        </div>)
}

const Dialogs = () => {
    let dateData = [
        {id: 1, time: "13:22"},
        {id: 2, time: "14:32"},
        {id: 3, time: "12:25"},
        {id: 4, time: "11:21"},
        {id: 5, time: "16:24"},
        {id: 6, time: "18:32"},


    ]
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
                return <DialogsItem name={dialog.name} id={dialog.id}
                />
            });

    let newDialogsMessages = dialogsMessagesData
        .map(message => <DialogsMessages message={message.message}
        />);

    let newDialogsDate = dateData
        .map(time => {
            return <DialogsHobbies time={time.time}/>
        });

    return (
        <div className={classes.dialogsAll}>

            <div className={classes.dialogs}>
                {newDialogs}
                {/*<DialogsItem name = {dialogsData[0].name} id={dialogsData[0].id} />*/}
                {/*<DialogsItem name = {dialogsData[1].name} id={dialogsData[1].id} />*/}
                {/*<DialogsItem name = {dialogsData[2].name} id={dialogsData[2].id} />*/}
                {/*<DialogsItem name = {dialogsData[3].name} id={dialogsData[3].id} />*/}
                {/*<DialogsItem name = {dialogsData[4].name} id={dialogsData[4].id} />*/}
                {/*<DialogsItem name = {dialogsData[5].name} id={dialogsData[5].id} />*/}

            </div>


            <div className={classes.messages}>
                {newDialogsMessages}
                {/*<DialogsMessages message={dialogsMessages[0].message} />*/}
                {/*<DialogsMessages message={dialogsMessages[1].message} />*/}
                {/*<DialogsMessages message={dialogsMessages[2].message} />*/}
                {/*<DialogsMessages message={dialogsMessages[3].message} />*/}
                {/*<DialogsMessages message={dialogsMessages[4].message} />*/}
                {/*<DialogsMessages message={dialogsMessages[5].message} />*/}

            </div>

            <div className={classes.time}>
                {newDialogsDate}
            </div>

        </div>


    )

}

export default Dialogs