import React from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShip } from '@fortawesome/free-solid-svg-icons'

// let test1 = "header";
// let test2 = "active";
// let classNew = `${classes.header} ${classes.active}`;это двойной класс его можно использовать

const Header = () => {
  return (
    <header className={classes.header}>
        <FontAwesomeIcon icon={faShip} className={classes.icon} />
        {/*<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2sOdNTUYrgWYsUwe8LF1FJ4-XXbBp9lLlfzKppSe2oOFumoLz&usqp=CAU"></img>*/}
      {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbcaKdblglmQe9isNHnTB-6YwznE-rKTELEcyGQom6pck_eHpV&usqp=CAU"></img>*/}
    </header>
  );
};

export default Header;
