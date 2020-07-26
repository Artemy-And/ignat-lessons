import React from "react";
import classes from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogsItemType = {
  name: string;
  id: number;
};

const DialogItem = (props: DialogsItemType) => {
  let path = "/dialogs" + props.id;
  return (
    <div className={classes.dialog + " " + classes.active}>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4bkPT14o4_n_lnU-3DNyZol1LE0vParolHN-kXQTD8exgO4-8&usqp=CAU"></img>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
