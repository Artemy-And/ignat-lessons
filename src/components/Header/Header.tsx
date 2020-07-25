import React from "react";
import classes from "./Header.module.css";

// let test1 = "header";
// let test2 = "active";
// let classNew = `${classes.header} ${classes.active}`;это двойной класс его можно использовать

const Header = () => {
  return (
    <header className={classes.header}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbcaKdblglmQe9isNHnTB-6YwznE-rKTELEcyGQom6pck_eHpV&usqp=CAU"></img>
    </header>
  );
};

export default Header;
