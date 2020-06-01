import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";


type DialogsItemType = {
    name: string
    id: number
}

const DialogItem = (props: DialogsItemType) => {
    let path = '/dialogs' + props.id;
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>

    )
}


export default DialogItem;